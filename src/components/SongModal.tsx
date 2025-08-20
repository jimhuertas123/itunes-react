import { createPortal } from "react-dom";
import type { Song } from "../types";
import { useEffect } from "react";
import { ArtistCards } from "./modalArtists/ArtistCards";

export default function SongModal({
  song,
  isOpen,
  onClose,
}: {
  song: Song;
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDialogElement>) {
  if (!isOpen) return null;  

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const handleOpenSpotifyTrackClick = (link: string ) => {
        window.open(link, '_blank');
    };

  return (
    createPortal(
      <dialog
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={{
          width: "100vw",
          height: '100vh',
          background: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(20px)",
        }}
        onClick={e => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Close button */}
          <button
            className="modal-close-btn absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            onClick={onClose}
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              color: "#ffffff",
              backdropFilter: "blur(10px)"
            }}
          >
            ✕
          </button>

          <div className="flex flex-col md:flex-row">
            {/*LEF TSIDE!!!! */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <div className="relative">
                <img
                  src={song.album.image}
                  alt={song.album.name}
                  className="w-80 h-80 rounded-2xl shadow-2xl"
                  style={{
                    border: "3px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
                  }}
                />
                {/*TODO: vinyl effect :( */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-10"
                  style={{
                    background: "radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.1) 31%, rgba(255,255,255,0.1) 32%, transparent 33%)"
                  }}
                />
                <div className="space-y-3">
                  <ArtistCards artistsId={song.artists.map(artist => artist.id)} />
                </div>
              </div>
            </div>

            {/*RIGHT SIDE!! */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6">
              {/* title */}
              <div>
                <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
                  {song.title}
                </h1>
                <p className="text-xl text-gray-300">
                  {song.album.name}
                </p>
              </div>

              {/* details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-400">Release Date</span>
                  <span className="text-white font-medium">{song.releaseDate}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-medium">3:24</span>
                </div>
              </div>

              {/*audio preview */}
              <div className="mt-6">
                {song.previewUrl ? (
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">Preview</h3>
                    <audio 
                      controls 
                      className="w-full h-12 rounded-lg"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      <source src={song.previewUrl} type="audio/mpeg" />
                      Your browser doesn't support audio preview.
                    </audio>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-700 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 3a1 1 0 00-1.196-.98L8 3.75v5.5l-2.804-2.804A1 1 0 004 7.75V17a1 1 0 001.196.98L14 16.25v-5.5l2.804 2.804A1 1 0 0018 12.25V3z"/>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">
                      No preview available
                    </p>
                  </div>
                )}
              </div>

             
              <div className="flex gap-3 pt-4">

                <button onClick={() => handleOpenSpotifyTrackClick(song.link_to_song)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-200">
                  Play Full Song
                </button>
                 {/* do nothing yet */}
                <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors duration-200">
                  ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>,
      document.body
    )
  );
}