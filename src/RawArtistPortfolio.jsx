
import { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/index.css";

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
    <main className={\`\${darkMode ? "bg-black text-white" : "bg-[#f7f7f7] text-black"} min-h-screen font-sans transition-colors duration-300\`}>
      <header className="flex justify-between items-center px-6 py-4 text-sm">
        <div className="flex gap-2">
          <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : "opacity-60"}>EN</button>
          <button onClick={() => setLang("de")} className={lang === "de" ? "font-bold" : "opacity-60"}>DE</button>
        </div>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀️" : "🌙"}</button>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-12 px-4">
        <h1 className="text-3xl sm:text-5xl font-light tracking-tight mb-2 uppercase">{current.name}</h1>
        <p className="text-base sm:text-lg text-neutral-500 max-w-md">{current.role}</p>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl mb-4 uppercase font-medium">{current.aboutTitle}</h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {current.aboutText}
        </p>
      </section>

      <section className="py-12 px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <a href="/photo-gallery" className="group block overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300">
          <img src="https://placehold.co/600x400?text=Photo" alt="Photo preview" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </a>
        <a href="/video-gallery" className="group block overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300">
          <img src="https://placehold.co/600x400?text=Video" alt="Video preview" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </a>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl mb-4 uppercase font-medium">{current.contactTitle}</h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">{current.contactText}</p>
        <div className="flex justify-center gap-8 text-4xl">
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200"><FaWhatsapp /></a>
          <a href="https://t.me/kuskov_art" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200"><FaTelegramPlane /></a>
          <a href="mailto:kuskov.alexander@email.com" className="hover:scale-110 transition-transform duration-200"><MdEmail /></a>
          <a href="https://instagram.com/kuskov.art" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200"><FaInstagram /></a>
        </div>
      </section>
    </main>
  );
}
