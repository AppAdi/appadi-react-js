import { useEffect } from "react";
import HubungiKamiForm from "./HubungiKamiForm";
import UseStore from "./DataStore";
import Pokemon from "./Pokemon";

export const Main = () => {
    const {pokemons, getPokemons} = UseStore();
    
    useEffect(()=>{
        getPokemons();
    },[]);

    console.log(pokemons);

    return (
        <div className="main-wrapper">
          <div className="main">
            <div className="hello-container">
              <h1>Hello, Pokemon hunter</h1>
              <h2>Selamat datang di dunia Pokemon</h2>
            </div>
            <div className="pokemon-container">
              <h3>List Pokemon</h3>
              <div className="list-card">
                {pokemons.map((pokemon, index) => {
                  return <Pokemon key={index} name={pokemon.name} id={index + 1} />;
                })}
              </div>
            </div>
            <div className="hubungiKami-container">
              <h2>Hubungi Kami</h2>
              <HubungiKamiForm />
            </div>
          </div>
        </div>
      );
}

export default Main;