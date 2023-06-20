import PokemonCard from "../../components/PokemonCard";
import { typesContext } from "../../context/Context";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import Types from "../../components/Types"

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [id, setId] = useState(0);
  const {type, setTypes} = useContext(typesContext);

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
          }
          )
          console.log(type);
      }
      

      )
      .catch((error) => {})
  }, [id,type]);

  const [searchInput, setsearchInput] = useState("");

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  };

  const filteredData = pokeData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const setTypeFunc = (typeNum) => {
    setTypes(typeNum);
    console.log(type);
  }

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

      <a href="#openModal">Modal-Fenster öffnen</a>

      <div id="openModal" className="modalDialog">
 <div>
  <a href="#close" title="Schließen" className="close">X</a>
  <h2>Modal-Fenster</h2>
  <p>Dies ist ein modales Fenster, das mit HTML5 und CSS3 erstellt wurde.</p>
  <Types/>
  <a onClick={() => {setTypeFunc(0)}}>KLICK ME</a>
  <a onClick={() => {setTypeFunc(1)}}>KLICK ME</a>
 </div>
</div>

    </section>
  );
};

export default Home;
