import type { Song } from "../../types";


const PlaySVG = ()=> (
  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 25 20">
    <path d="M8 5v10l8-5-8-5z"/>
  </svg>
)

const MusicSymbolSVG = () => (
  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
)

type SongGridFullfilledProps = {
  querySongs: Song[] | null;
  onClickSong: (song: Song) => void;
};

export const SongGridFullfilled: React.FC<SongGridFullfilledProps> 
  = ({ querySongs, onClickSong }) => {

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      style={{ 
        padding: "1rem 0",
       }}
    >
      { querySongs 
        ? (querySongs.map((song) => (
          <div
            key={song.id}
            onClick={() => onClickSong(song)}
            className="group rounded-2xl overflow-hidden cursor-pointer duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={song.album.image}
                alt={song.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent 50%)"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1">
                <div 
                  className="w-full h-full flex items-center justify-center backdrop-blur-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <PlaySVG />
                </div>
              </div>
            </div>

            {/* song info */}
            <div className="p-4 space-y-2">
              <div className="flex items-start gap-2">
                <h3
                  className="text-sm font-bold leading-tight flex-1"
                  style={{ 
                    color: "#ffffff",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {song.title}
                </h3>
                {song.explicit && (
                  <span
                    className="px-1.5 py-0.5 text-xs font-bold rounded-md flex-shrink-0"
                    style={{
                      background: "rgba(239, 68, 68, 0.2)",
                      color: "#fca5a5",
                      border: "1px solid rgba(239, 68, 68, 0.3)"
                    }}
                    title="Explicit"
                  >
                    E
                  </span>
                )}
              </div>

              {/* Artist names */}
              <div className="space-y-1">
                {song.artists.slice(0, 2).map((artist) => (
                  <p
                    key={artist.id}
                    className="text-xs truncate"
                    style={{ 
                      color: "#a1a1aa",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {artist.name}
                  </p>
                ))}
                {song.artists.length > 2 && (
                  <p 
                    className="text-xs"
                    style={{ color: "#71717a" }}
                  >
                    +{song.artists.length - 2} more
                  </p>
                )}
              </div>

              {/* Rating bar */}
              <div className="flex items-center gap-2 pt-1">
                <div 
                  className="flex-1 h-2 rounded-full relative overflow-hidden"
                  style={{ background: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${song.rating}%`,
                      background: song.rating >= 70 
                        ? "linear-gradient(90deg, #10b981, #059669)" 
                        : song.rating >= 40 
                        ? "linear-gradient(90deg, #f59e0b, #d97706)"
                        : "linear-gradient(90deg, #ef4444, #dc2626)",
                      boxShadow: song.rating >= 70 
                        ? "0 0 8px rgba(16, 185, 129, 0.4)"
                        : song.rating >= 40
                        ? "0 0 8px rgba(245, 158, 11, 0.4)"
                        : "0 0 8px rgba(239, 68, 68, 0.4)"
                    }}
                  />
                </div>
                <span 
                  className="text-xs font-medium tabular-nums"
                  style={{ 
                    color: "#d4d4d8",
                    minWidth: "32px",
                    textAlign: "right"
                  }}
                >
                  {song.rating}%
                </span>
              </div>
            </div>
          </div>
        )))
        : (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <div 
                className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <MusicSymbolSVG />
              </div>
              <p className="text-gray-400 font-medium">No songs found</p>
              <p className="text-gray-500 text-sm mt-1">Try searching for something else</p>
            </div>
          )
      }
    </div>
  );
};
