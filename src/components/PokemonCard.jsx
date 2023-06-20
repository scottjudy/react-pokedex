import { useState } from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  const [catched, setCatched] = useState(false);

  const toggleCatched = () => {
    setCatched((prev) => !prev);
  };
  return (
    <article className="pokemon-card">
      <div onClick={toggleCatched}>
        <h3 className={catched ? "catched" : "notcatched"}>
          {catched ? "Catched" : "Not Catched"}
        </h3>
      </div>
      <img
        src={props.img}
        alt={props.name}
        className={catched ? "catchedimg" : "notcatchedimg"}
      />
      <h2>{catched ? `${props.name}` : "???"}</h2>
      <p>#{props.id}</p>
    </article>
  );
};

export default PokemonCard;
