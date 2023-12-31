import React from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import title from "../Assets/title.png";
import { useState } from "react";

//* NavBar, will have navigation for desktop and mobile and the search bar

export default function Nav({ onSearch }) {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const handleOut = () => {
    navigate("/");
  };

  const { pathname } = useLocation();

  return (
    <nav className="w-full h-[120px] md:h-[65px] bg-slate-600 flex flex-col md:flex-row md:justify-between justify-center border-y-2 border-slate-800 px-4">
      <div className="flex flex-row justify-center md:block">
        <img
          src={title}
          alt="Title image rick and morty"
          className="h-[55px] w-[220px]"
        />
      </div>

      {/* {Desktop Menu} */}

      <div className="hidden md:flex text-emerald-500">
        <Link to="/home">
          {pathname === "/home" ? (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 scale-110 underline brightness-150">
              Home
            </button>
          ) : (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300 hover:brightness-150">
              Home
            </button>
          )}
        </Link>
        <Link to="/about">
          {pathname === "/about" ? (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 scale-110 underline brightness-150">
              About
            </button>
          ) : (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300 hover:brightness-150">
              About
            </button>
          )}
        </Link>
        <Link to="/favorites">
          {pathname === "/favorites" ? (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 scale-110 underline brightness-150">
              Favorites
            </button>
          ) : (
            <button className="text-lg lg:text-2xl px-3 lg:px-8 py-2 hover:scale-110 hover:underline duration-300 hover:brightness-150">
              Favorites
            </button>
          )}
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <div className="md:hidden z-10 cursor-pointer flex flex-col justify-center">
          <button
            className="text-gray-200 rounded-xl text-lg border-2 border-green-600 bg-green-500 hover:bg-green-600 hover:border-green-700 p-1"
            onClick={handleClick}
          >
            Menu
          </button>
        </div>
        <div className="md:flex md:flex-col md:justify-center ">
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="ml-10 flex flex-col justify-center">
          <button
            onClick={handleOut}
            className="text-gray-200 rounded-xl text-lg border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:border-red-700 p-1"
          >
            Out
          </button>
        </div>
      </div>

      {/* {Mobile Menu} */}

      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl text-emerald-500 hover:scale-110 hover:underline duration-300 hover:brightness-150">
          <Link to="/home" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl text-emerald-500 hover:scale-110 hover:underline duration-300 hover:brightness-150">
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl text-emerald-500 hover:scale-110 hover:underline duration-300 hover:brightness-150">
          <Link onClick={handleClick} to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
