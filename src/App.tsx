import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SongGrid } from "./components/songGridComponents";
import SongModal from "./components/SongModal";

import "./App.css";

import type { Song } from "./types";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedSong) {
      setIsOpen(true);
    }
  }, [selectedSong]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "#000000",
      }}
    >
      <div
        className="max-w-4xl mx-auto py-8 px-4 rounded-lg"
        style={{ backgroundColor: "transparent" }}
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{
            color: "#f0f0f0", 
          }}
        >
          ♬ Tune Raider
        </h1>

        <SearchBar onSearch={setQuery} />
        
        <SongGrid query={query} onClickSong={setSelectedSong} />

        {selectedSong && (
          <SongModal
            song={selectedSong}
            isOpen={isOpen}
            onClose={() => {
              setSelectedSong(null);
            }}
          />
        )}
      </div>
    </div>
  );
}