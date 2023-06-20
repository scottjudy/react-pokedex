import "./Types.css";
import Pikachu from "../assets/img/pngegg.png";
import { useContext } from "react";
import { typesContext } from "../context/Context";

const Types = () => {
  const { type, setTypes } = useContext(typesContext);

  const chooseType = (event) => {
    setTypes(event.target.textContent);
    setTypes((prev) => prev + "");
    console.log(type);
  };

  const resetType = () => {
    setTypes("");
  };

  return (
    <>
      <section className="TYPES">
        <button onClick={chooseType} className="typebutton">
          Water
        </button>
        <button onClick={chooseType} className="typebutton">
          Bug
        </button>
        <button onClick={chooseType} className="typebutton">
          Dark
        </button>
        <button onClick={chooseType} className="typebutton">
          Dragon
        </button>
        <button onClick={chooseType} className="typebutton">
          Electric
        </button>
        <button onClick={chooseType} className="typebutton">
          Fairy
        </button>
        <button onClick={chooseType} className="typebutton">
          Fighting
        </button>
        <button onClick={chooseType} className="typebutton">
          Fire
        </button>
        <button onClick={chooseType} className="typebutton">
          Flying
        </button>
        <button onClick={chooseType} className="typebutton">
          Ghost
        </button>
        <button onClick={chooseType} className="typebutton">
          Grass
        </button>
        <button onClick={chooseType} className="typebutton">
          Ground
        </button>
        <button onClick={chooseType} className="typebutton">
          Ice
        </button>
        <button onClick={chooseType} className="typebutton">
          Plant
        </button>
        <button onClick={chooseType} className="typebutton">
          Poison
        </button>
        <button onClick={chooseType} className="typebutton">
          Psychic
        </button>
        <button onClick={chooseType} className="typebutton">
          Rock
        </button>
        <button onClick={chooseType} className="typebutton">
          Steel
        </button>
        <button onClick={chooseType} className="typebutton">
          Normal
        </button>
        <button onClick={resetType} className="typebutton">
          Reset
        </button>
      </section>
    </>
  );
};

export default Types;
