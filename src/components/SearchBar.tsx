import { useDeferredValue, useState } from "react";

const SearchSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
    />
  </svg>
);

export const SearchBar = ({ onSearch, ...props }: { onSearch: (q: string) => void } & React.HTMLAttributes<HTMLFormElement>) => {
  const [input, setInput] = useState("");
  // const deferredSearch = useDeferredValue(input)
	// const isPending = useSpinDelay(search !== deferredSearch)

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
        className="flex-1 border border-[#D1D1D6] bg-[#F2F2F7] text-[#000000] rounded-lg px-4 py-2 focus:border-[#FA2C56] focus:outline-none placeholder:text-[#8E8E93]"
      />
      <button
        type="submit"
        className="bg-[#FA2C56] text-white px-4 py-2 rounded-lg hover:bg-[#FF375F] transition-colors"
      >
        <SearchSVG />
      </button>
    </form>
  );
}