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
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: "rgba(28,28,30,0.7)", // Background Dark with opacity
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="p-6 rounded-lg max-w-lg w-full relative shadow-lg"
        style={{
          background: "#F2F2F7", // Card Background
          border: "1px solid #D1D1D6", // Borders / Dividers
        }}
      >
        {/* close button */}
        <button
          className="absolute top-2 right-2"
          style={{
            color: "#8E8E93", // Text Secondary
          }}
          onClick={onClose}
        >
          ✕
        </button>

        {/* album image */}
        <img
          src={song.album.image}
          alt={song.album.name}
          className="w-48 h-48 mx-auto rounded-lg shadow"
          style={{
            border: "2px solid #FA2C56", // Primary Accent
          }}
        />

        {/* rest info */}
        <h2
          className="text-2xl font-bold mt-4 text-center"
          style={{ color: "#000000" }} // Text Primary
        >
          {song.title}
        </h2>
        <p
          className="text-center"
          style={{ color: "#8E8E93" }} // Text Secondary
        >
          {song.album.name}
        </p>

        {/* artist */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={song.artist.image}
            alt={song.artist.name}
            className="w-12 h-12 rounded-full"
            style={{
              border: "2px solid #FF375F", // Secondary Accent
            }}
          />
          <span
            className="text-lg font-medium"
            style={{ color: "#000000" }} // Text Primary
          >
            {song.artist.name}
          </span>
        </div>

        {/* additional info */}
        <div className="mt-4 text-sm" style={{ color: "#8E8E93" }}>
          <p>
            <strong style={{ color: "#FA2C56" }}>Género:</strong> {song.genre}
          </p>
          <p>
            <strong style={{ color: "#FA2C56" }}>Fecha de lanzamiento:</strong> {song.releaseDate}
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
          <div
            className="mt-4 p-3 rounded max-h-40 overflow-y-auto text-sm"
            style={{
              background: "#FFFFFF", // Background Light
              color: "#000000", // Text Primary
              border: "1px solid #D1D1D6",
            }}
          >
            {song.lyrics}
          </div>
        )}
      </div>
    </div>
  );
}