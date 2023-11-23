import Cards from "./components/Cards.jsx";
import Nav from "./components/nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./Views/About";
import Detail from "./Views/Detail";
import Form from "./Views/Form";
import Favorites from "./Views/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const URL = "http://localhost:3001/rickandmorty/";
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function login(userData) {
    const { email, password } = userData;
    axios(`${URL}login?email=${email}&password=${password}`).then(
      ({ data }) => {
        const access = data;
        console.log(access);
        setAccess(data);
        if (access === true) {
          navigate("/home");
        } else {
          window.alert("Email o password incorrecta");
        }
      }
    );
  }

  const onSearch = async (id) => {
    const character = (
      await axios(`http://localhost:3001/rickandmorty/character/${id}`)
    ).data;
    try {
      if (character.name) {
        setCharacters((oldChars) => [...oldChars, character]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    const newChars = characters.filter((character) => character.id !== id);

    setCharacters(newChars);
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
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
