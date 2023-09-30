import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
