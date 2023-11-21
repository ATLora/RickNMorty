import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import title from "../Assets/title.png";
import { useState } from "react";

export default function Nav({ onSearch }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full h-[120px] md:h-[60px] bg-blue-900 flex flex-col md:flex-row md:justify-between justify-center border-b-2 border-blue-950 px-4">
      <div className="flex flex-row justify-center md:block">
        <img
          src={title}
          alt="Title image rick and morty"
          className="h-[55px] w-[220px]"
        />
      </div>
      <div className="hidden md:flex text-gray-200">
        <Link to="/home">
          <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300">
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300">
            About
          </button>
        </Link>
        <Link to="/favorites">
          <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300">
            Favorites
          </button>
        </Link>
      </div>
      <div className="flex flex-row justify-around">
        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer flex flex-col justify-center"
        >
          <button
            className="text-gray-200 text-lg border-2 border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 p-1 rounded-sm"
            onClick={handleClick}
          >
            Menu
          </button>
        </div>
        <div className="md:flex md:flex-col md:justify-center">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl ">
          <Link to="/home">Home</Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="/about">About</Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
