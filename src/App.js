import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./Views/About";
import Detail from "./Views/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const newChars = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(newChars);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
