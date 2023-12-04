import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyPress}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        className="rounded-sm mx-2 border-2 w-40"
      />
      <button
        onClick={() => onSearch(id)}
        className="text-gray-200 text-lg border-2 border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 py-1 px-2 rounded-sm"
      >
        Add
      </button>
    </div>
  );
}
