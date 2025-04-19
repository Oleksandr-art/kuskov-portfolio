
export default function PhotoGallery() {
  return (
    <main className="min-h-screen p-10 bg-white text-black font-['Satoshi']">
      <h1 className="text-3xl mb-6 uppercase">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="https://placehold.co/600x400?text=Photo+1" alt="Photo 1" />
        <img src="https://placehold.co/600x400?text=Photo+2" alt="Photo 2" />
        <img src="https://placehold.co/600x400?text=Photo+3" alt="Photo 3" />
        <img src="https://placehold.co/600x400?text=Photo+4" alt="Photo 4" />
      </div>
    </main>
  );
}
