import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { SongGrid } from "./components/SongGridComponents/SongGrid";
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
        backgroundColor: "#F2F2F7",
        color: "#000000",
      }}
    >
      <div
        className="max-w-4xl mx-auto py-8 px-4 rounded-lg"
        style={{ backgroundColor: "#F2F2F7" }}
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{
            color: "#FA2C56", 
          }}
        >
          🎵 iTunes Search
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