import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeContext,loadingContext } from "./context/Context";
import LoadingScreen from "./components/LoadingScreen"


function App() {
  const [pokeData, setPokeData] = useState(null);
  const [theme, setTheme] = useState(false);
  const [loading,setLoading] = useState(true);


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
        <loadingContext.Provider value={{ loading, setLoading }}>
          <BrowserRouter>
          {loading? "" : <Header/>}
            <Routes>
              <Route path="/" element={loading?<LoadingScreen/> : <Home/> } />
              <Route path="/test" element={loading?<LoadingScreen/> : <Home/> } />
            </Routes>
          </BrowserRouter>
        </loadingContext.Provider>  
      </ThemeContext.Provider>
    </section>
    </>
  );
}

export default App;
