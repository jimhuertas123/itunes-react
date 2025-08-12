import { useState } from "react";

export const SearchBar = ({ onSearch, ...props }: { onSearch: (q: string) => void } & React.HTMLAttributes<HTMLFormElement>) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} {...props} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search for a song or artist..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}