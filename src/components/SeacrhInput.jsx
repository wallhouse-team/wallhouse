import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const handleClear = () => setQuery("");

  return (
    <form className="w-80">
      <div className="relative">
        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Қидириш"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-[#1E2939] text-white rounded-md pl-4 pr-20 py-2 outline-none"
        />

        {/* Иконка поиска */}
        <div
          className={`absolute top-1/2 transform cursor-pointer -translate-y-1/2 text-white transition-all duration-200 ${
            query ? "right-12" : "right-4"
          }`}
        >
          <Search size={20} />
        </div>

        {/* Иконка очистки */}
        <button
          type="button"
          onClick={handleClear}
          className={`absolute top-1/2 right-3 transform cursor-pointer -translate-y-1/2 text-white transition-all duration-200 ${
            query
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-0 pointer-events-none"
          }`}
        >
          <X size={20} />
        </button>
      </div>
    </form>
  );
}
