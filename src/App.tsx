import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { SongGrid } from "./components/SongGrid";
import SongModal from "./components/SongModal";
import "./App.css";
import { mockSong } from "./assets/example";
import Background from './images/background.jpg'

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
   
  return (  
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} >
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🎵 iTunes Search
        </h1>

        <SearchBar onSearch={setQuery} />

        <SongGrid query={query} onSelectSong={setSelectedSong} />

        {/* Modal */}
         <div className="p-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
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