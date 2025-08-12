import type { Song } from "../../types";

type SongGridFullfilledProps = {
  querySongs: Song[];
  onClickSong: (song: Song) => void;
};

export const SongGridFullfilled: React.FC<SongGridFullfilledProps> 
  = ({ querySongs, onClickSong }) => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {querySongs.map((song) => (
        <div
          key={song.id}
          onClick={() => onClickSong(song)}
          className="shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200"
          style={{
            backgroundColor: "#F2F2F7",
            color: "#000000",
            border: "1.5px solid #D1D1D6"
          }}
        >
          {/* album image */}
          <img
            src={song.album.image}
            alt={song.title}
            className="w-full h-40 object-cover"
            style={{ background: "#D1D1D6" }}
          />

          {/* rest info */}
          <div className="p-3">
            <h3
              className="text-sm font-bold truncate"
              style={{ color: "#000000" }}
            >
              {song.title}
            </h3>
            <p
              className="text-xs truncate"
              style={{ color: "#8E8E93" }}
            >
              {song.artist.name}
            </p>
            <span
              className="inline-block mt-1 px-2 py-1 text-xs rounded-full"
              style={{
                background: "#FA2C56",
                color: "#fff"
              }}
            >
              {song.genre}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
