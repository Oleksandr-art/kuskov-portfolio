
export default function VideoGallery() {
  return (
    <main className="min-h-screen p-10 bg-white text-black font-['Satoshi']">
      <h1 className="text-3xl mb-6 uppercase">Video Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" />
        <video controls src="https://www.w3schools.com/html/movie.mp4" />
      </div>
    </main>
  );
}
