import PokemonCard from "../../components/PokemonCard";
import { typesContext, searchInputContext } from "../../context/Context";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import Types from "../../components/Types";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [id, setId] = useState(0);
  const { type, setTypes } = useContext(typesContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((data) => {
        fetch(data.results[id].url)
          .then((res) => res.json())
          .then((newData) => {
            const newValue = [...pokeData, newData];
            setPokeData(newValue);
            setId(id + 1);
          });
        console.log(type);
        console.log(pokeData[0]);
      })
      .catch((error) => {
        // console.log("Fehler", error);
      });
  }, [id, type]);

  // ! SEARCH +++++++++++++++++++++++++

  const { searchInput, setsearchInput } = useContext(searchInputContext);

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  };

  const filteredData = pokeData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // ! TYPES +++++++++++++++++++++++++

  const filteredTypes = pokeData.filter((item) =>
    item.types[0].type.name.toLowerCase().includes(type.toLowerCase())
  );

  // ! SETTYPE +++++++++++++++++++++++++

  const setTypeFunc = (typeNum) => {
    setTypes(typeNum);
    console.log(type);
  };

  return (
    <section className="home-section">
      <article className="pokemon-card-gallery">
        {filteredData
          ?.filter((item) =>
            item.types[0].type.name.toLowerCase().includes(type.toLowerCase())
          )
          .map((item, index) => (
            <div key={index}>
              <PokemonCard
                name={item.name}
                img={`${item.sprites.versions["generation-v"]["black-white"].front_default}`}
                id={item.id}
              />
            </div>
          ))}
      </article>
      <a href="#openModal"></a>
      <div id="openModal" className="modalDialog">
        <div>
          <a href="#close" title="Schließen" className="close">
            X
          </a>
          <Types />
        </div>
      </div>
    </section>
  );
};

export default Home;
