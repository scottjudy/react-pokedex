import "./PokemonDetails.css"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";

const PokemonDetails = () => {
    const params = useParams()
    const [pokeData, setPokeData] = useState([]);
    const [id, setId] = useState(0)
    const [isChecked, setIsChecked] = useState(false)

    // const toggleCheck = () => {
    //     setIsChecked(!isChecked)
    //     handleClick()
    // }
    // const imgBox = isChecked ? 
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         fetch(data.results[id].url)
    //             .then((res) => res.json())
    //             .then((newData) => {
    //                 console.log(newData);
    //                 const newValue = [...pokeData, newData]
    //                 setPokeData(newValue);
    //                 setId(id + 1)
    //             })
    //       });
    //   }, [id]);
    //   console.log("Poke",pokeData);
    // const pokemonItem = pokeData.find((item) => item.name === params.data)
    // console.log("item", pokemonItem );
    // console.log("Log",pokeData.name);

    return ( 
        <div className="details-section">
        <section className="img-section">
            <article className="img-background"></article>
            <article  className="img-box">
                <img onClick={() => setIsChecked(prevMode => !prevMode)} 
                src={isChecked ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif"} 
                alt=""/>
            </article>
        </section>
        <section className="name-section">
            <h2>Name</h2>
        </section>
        <section className="type-section">
            <h6>Poison</h6>
            <h6>Grass</h6>
        </section>
        <section className="stats-section">
            <article>
            <h5>Attacks and Movements</h5>
            </article>
            <table>
                <tr className="stats">
                    <th>HP</th>
                    <th>ATTACK</th>
                    <th>DEFENSE</th>
                    <th>SPECIAL-AT.</th>
                    <th>SPECIAL-DF.</th>
                    <th>SPEED</th>
                </tr>
                <tr className="gifs">
                    <th><img src="https://media.tenor.com/NUfwB_Zq-iQAAAAC/game-health-bar-health-bar.gif" alt="HP" /></th>
                    <th><img src="https://icon-library.com/images/special-attack-icon/special-attack-icon-26.jpg" alt="ATTACK" /></th>
                    <th><img src="https://www.bootgum.com/wp-content/uploads/2018/07/ShieldGuard550Watermarked.gif" alt="DEFENSE" /></th>
                    <th><img src="https://thumbs.gfycat.com/FirstClutteredAustraliancurlew-max-1mb.gif" alt="SPECIAL DEFENSE" /></th>
                    <th><img src="https://i.gifer.com/origin/07/07d88b88f837bebba49f49d0d0a9c3ab_w200.gif" alt="" /></th>
                    <th><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/63a15559-0315-4e6e-ac97-97ce1d1f372c/d5fxwvx-85778b86-8b97-4bd9-a828-1a6ec50c220b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzYTE1NTU5LTAzMTUtNGU2ZS1hYzk3LTk3Y2UxZDFmMzcyY1wvZDVmeHd2eC04NTc3OGI4Ni04Yjk3LTRiZDktYTgyOC0xYTZlYzUwYzIyMGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JJ6q5iEuK2a6vKtEwr40i8KqV8B3RV7wjKcDDQkA_k0" alt="SPEED" /></th>
                </tr>
                <tr className="attributs">
                    <td>45</td>
                    <td>49</td>
                    <td>49</td>
                    <td>65 (EFFORT:1)</td>
                    <td>65</td>
                    <td>45</td>
                </tr>
            </table>
        </section>
    </div>
    );
}
 
export default PokemonDetails;