import { useEffect, useState } from "react";
import { type Song, type ITunesSongResponse, adaptITunesResponseToSong } from "../../types/types";

type SongGridProps = {
  query: string;
  onSelectSong: (song: any) => void;
};

export const SongGrid: React.FC<SongGridProps> = ({ query, onSelectSong }) => {
  const [musicGrid, setMusicGrid] = useState<Array<Song>>([]);
  const mockData = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: `${i + 1}`,
      title: `Fake Song Title ${i + 1}`,
      artist: {
        name: "John Doe",
        image: "https://placehold.co/150x150/png"
      },
      album: {
        name: "Greatest Hits",
        image: "https://placehold.co/300x300/png"
      },
      releaseDate: "2024-05-15",
      genre: "Pop",
      previewUrl: "https://p.scdn.co/mp3-preview/example",
      lyrics:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataJson = await fetch('/data.json')
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          });

        if ('results' in dataJson) {
          const songs: Array<Song> = dataJson.results.map((item: ITunesSongResponse) => adaptITunesResponseToSong(item));
          setMusicGrid(songs);
          console.log(songs);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMusicGrid(mockData);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      // style={{ backgroundColor: "#1C1C1E", minHeight: "100vh" }}
    >
      {musicGrid.length === 0 && query && (
        <p
          className="col-span-full text-center"
          style={{ color: "#8E8E93" }}
        >
          No results yet...
        </p>
      )}

      {musicGrid.map((song) => (
        <div
          key={song.id}
          onClick={() => onSelectSong(song)}
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
