import { useDeferredValue, useEffect, useState } from "react";


const X_SVG = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

const SearchSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
    style={{ color: "#9ca3af" }}
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

  useEffect(() => {
    const getData = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(getData);
  }, [input]);

  const deferredSearch = useDeferredValue(input);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} {...props} className="flex gap-4 mb-8">
      <div className="relative flex-1">
        {/* search icon */}
        <div className="absolute left-4 top-1 transform -translate-y-1 pointer-events-none">
          <SearchSVG />
        </div>
        
        <input
          type="text"
          placeholder="Search for songs, artists, albums..."
          value={deferredSearch}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          className="w-full pl-5 pr-1 py-1 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(20px)",
            fontSize: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            borderRadius: "12px"
          }}
        />
        
        
        {input && (
          <button
            type="button"
            onClick={() => setInput("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#9ca3af",
            }}
          >
            <X_SVG />
          </button>
        )}
      </div>
      
      <button
        type="submit"
        className="px-3 py-1 font-medium transition-all duration-300 hover:scale-105 focus:outline-none"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          color: "white",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
          borderRadius: "12px"
        }}
      >
        <SearchSVG />
      </button>
    </form>
  );
}