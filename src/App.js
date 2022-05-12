import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    // useEffect con dependencia vacia ([]): ejecuta fetchCharacters solo cuando se renderiza el componente
    fetchCharacters(initialUrl);
  }, []);

  return (
    <nav className="App">
      <Navbar brand="Rick and Morty" />
      <div className="container mt-3">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </nav>
  );
}

export default App;
