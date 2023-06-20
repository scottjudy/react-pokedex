import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Types from "./Pages/type/Types";
import { useEffect, useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokeData(data);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Types />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// Test für Timo O