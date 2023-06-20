import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Types from "./Pages/type/Types";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeContext, loadingContext } from "./context/Context";
import LoadingScreen from "./components/LoadingScreen";
import PokemonDetails from "./pages/details/PokemonDetails";
import { pokeContext } from "./context/Context";

function App() {
  const [pokeData, setPokeData] = useState(null);
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <main className={theme ? "dark" : "light"}>
        <pokeContext.Provider value={{ pokeData, setPokeData }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <loadingContext.Provider value={{ loading, setLoading }}>
              <BrowserRouter>
                {loading ? "" : <Header />}
                <Routes>
                  <Route
                    path="/"
                    element={loading ? <LoadingScreen /> : <Home />}
                  />
                  <Route
                    path="/:id"
                    element={loading ? <LoadingScreen /> : <PokemonDetails />}
                  />
                </Routes>
              </BrowserRouter>
            </loadingContext.Provider>
          </ThemeContext.Provider>
        </pokeContext.Provider>
      </main>
    </>
  );
}

export default App;
