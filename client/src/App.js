import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Views/About";
import Detail from "./Views/Detail";
import Form from "./Views/Form";
import Favorites from "./Views/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const URL = "http://localhost:3001/rickandmorty/";
  const navigate = useNavigate();

  function login(userData) {
    const { email, password } = userData;
    axios(`${URL}login?email=${email}&password=${password}`).then(
      ({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      }
    );
  }

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
        <Route path="/" element={<Form />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
