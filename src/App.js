import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import { useState } from "react";
import axios from "axios";

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
      <div>
        <Nav onSearch={onSearch} />
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
