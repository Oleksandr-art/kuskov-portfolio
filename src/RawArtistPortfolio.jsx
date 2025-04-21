
import { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function RawArtistPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      name: "Oleksandr Kuskov",
      role: "multidisciplinary artist / performer / body & vision",
      aboutTitle: "About",
      aboutText:
        "I don’t play roles — I inhabit them. My work is rooted in presence, tension, and the raw energy of the body.",
      photoTitle: "Photo",
      videoTitle: "Video",
      contactTitle: "Contact",
      contactText: "Let’s create something raw and real.",
    },
    de: {
      name: "Oleksandr Kuskov",
      role: "multidisziplinärer Künstler / Performer / Körper & Vision",
      aboutTitle: "Über mich",
      aboutText:
        "Ich spiele keine Rollen – ich werde sie. Meine Arbeit ist in Präsenz, Spannung und der rohen Energie des Körpers verwurzelt.",
      photoTitle: "Fotos",
      videoTitle: "Video",
      contactTitle: "Kontakt",
      contactText: "Lass uns etwas Echtes und Rohes erschaffen.",
    },
  };

  const current = content[lang];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className={\`\${darkMode ? "bg-black text-white" : "bg-[#f9f9f9] text-black"} min-h-screen font-sans transition-colors duration-300\`}>
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 text-sm">
        <div className="flex gap-2">
          <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : "opacity-60"}>EN</button>
          <button onClick={() => setLang("de")} className={lang === "de" ? "font-bold" : "opacity-60"}>DE</button>
        </div>
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀️" : "🌙"}</button>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4 uppercase">{current.name}</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl text-neutral-500">{current.role}</p>
      </section>

      <section id="about" className="py-16 px-4 sm:px-6 md:px-12 border-t border-neutral-300 dark:border-neutral-700 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 uppercase font-medium">{current.aboutTitle}</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {current.aboutText}
        </p>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-12 border-t border-neutral-300 dark:border-neutral-700 grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="/photo-gallery" className="group block overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <img src="https://placehold.co/1000x600?text=Photo+Preview" alt="Photo preview" className="w-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-3 py-1 text-xl font-semibold rounded">
              {current.photoTitle}
            </div>
          </div>
        </a>
        <a href="/video-gallery" className="group block overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <img src="https://placehold.co/1000x600?text=Video+Preview" alt="Video preview" className="w-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-3 py-1 text-xl font-semibold rounded">
              {current.videoTitle}
            </div>
          </div>
        </a>
      </section>

      <section id="contact" className="py-16 px-4 sm:px-6 md:px-12 border-t border-neutral-300 dark:border-neutral-700 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 uppercase font-medium">{current.contactTitle}</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">{current.contactText}</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://t.me/kuskov_art" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
          <a href="mailto:kuskov.alexander@email.com" aria-label="Email"><MdEmail /></a>
          <a href="https://instagram.com/kuskov.art" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </section>
    </main>
  );
}
