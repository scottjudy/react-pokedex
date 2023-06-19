import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/Context";


function App() {
  const [pokeData, setPokeData] = useState(null);
  const [theme, setTheme] = useState(false);


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
    <section className={theme?"dark":""}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </section>
    </>
  );
}

export default App;
