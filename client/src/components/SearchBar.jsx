import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        className="rounded-sm mx-2 border-2 w-40"
      />
      <button
        onClick={() => onSearch(id)}
        className="text-gray-200 text-lg border-2 border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 p-1 rounded-sm"
      >
        Agregar
      </button>
    </div>
  );
}
