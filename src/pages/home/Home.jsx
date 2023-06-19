import PokemonCard from "../../components/PokemonCard";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((res) => res.json())
      .then((data) => {
        fetch(data.results[id].url)
          .then((res) => res.json())
          .then((newData) => {
            console.log(newData);
            const newValue = [...pokeData, newData];
            setPokeData(newValue);
            setId(id + 1);
          });
      });
  }, [id]);

  const [searchInput, setsearchInput] = useState("");

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  };

  const filteredData = pokeData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="home-section">
      <article className="search-field">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Pokemon suchen"
        />
      </article>
      <article className="pokemon-card-gallery">
        {filteredData?.map((item, index) => (
          <div key={index}>
            <PokemonCard
              name={item.name}
              img={`${item.sprites.versions["generation-v"]["black-white"].front_default}`}
              id={item.id}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default Home;
