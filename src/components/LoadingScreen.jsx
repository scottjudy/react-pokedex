import { useContext, useEffect } from "react";
import { loadingContext, pokeContext } from "../context/Context";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const { setLoading } = useContext(loadingContext);
  const { pokeData, setPokeData } = useContext(pokeContext);

  const DeactivateLoading = () => {
    setTimeout(stopLoading, 2500);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  DeactivateLoading();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokeData(data);
      });
  }, []);

  return (
    <section className="loadingSection">
      <div className="loading">
        <div className="pokeball">
          <div className="upperBall"></div>

          <div className="ballMid">
            <div className="ballMidDot"></div>
          </div>

          <div className=" lowerBall"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;
