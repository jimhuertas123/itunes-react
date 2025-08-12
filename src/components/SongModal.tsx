import type { mockSong } from "../assets/example";

export default function SongModal({
  song,
  isOpen,
  onClose,
}: {
  song: typeof mockSong;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg">
        {/* close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* album image */}
        <img
          src={song.album.image}
          alt={song.album.name}
          className="w-48 h-48 mx-auto rounded-lg shadow"
        />

        {/* rest info */}
        <h2 className="text-2xl font-bold mt-4 text-center">{song.title}</h2>
        <p className="text-center text-gray-600">{song.album.name}</p>

        {/* artist */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={song.artist.image}
            alt={song.artist.name}
            className="w-12 h-12 rounded-full"
          />
          <span className="text-lg font-medium">{song.artist.name}</span>
        </div>

        {/* additional info */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Género:</strong> {song.genre}
          </p>
          <p>
            <strong>Fecha de lanzamiento:</strong> {song.releaseDate}
          </p>
        </div>

        {/* audio preview */}
        {song.previewUrl && (
          <audio controls className="mt-4 w-full">
            <source src={song.previewUrl} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        )}

        {/* lyrics */}
        {song.lyrics && (
          <div className="mt-4 bg-gray-100 p-3 rounded max-h-40 overflow-y-auto text-sm">
            {song.lyrics}
          </div>
        )}
      </div>
    </div>
  );
}