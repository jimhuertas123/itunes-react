import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { SongGrid } from "./components/songGridComponents/SongGrid";
import SongModal from "./components/SongModal";
import "./App.css";
import { mockSong } from "./assets/example";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
        style={{
          backgroundColor: "#F2F2F7", // Card Background
        }}
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{
            color: "#FA2C56", // Primary Accent
          }}
        >
          🎵 iTunes Search
        </h1>

        <SearchBar onSearch={setQuery} />

        <SongGrid query={query} onSelectSong={setSelectedSong} />

        {/* Modal */}
        <div className="p-8">
          <button
            className="px-4 py-2 rounded font-semibold shadow"
            style={{
              background: "linear-gradient(90deg, #FA2C56 0%, #FF375F 100%)", // Primary to Secondary Accent
              color: "#FFFFFF",
              border: "none",
            }}
            onClick={() => setIsOpen(true)}
          >
            Open Modal
          </button>

          <SongModal
            song={mockSong}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}