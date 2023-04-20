import React from "react";
import ReactDOM from "react-dom/client";
import "./Pokedex.css";
import Pokecard from "./Pokecard";
import TodoList from "./Components/TodoList";

const pokemonData = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://images.pexels.com/photos/4966126/pexels-photo-4966126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://images.pexels.com/photos/9661252/pexels-photo-9661252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
};
const Pokedex = () => {
  return (
    <React.Fragment>
      <h1>POKEDOX</h1>
      <div className="container">
        {/* map */}
        {/* {[1,2,3,4,5].map(ele=><li>numbs:{ele}</li>)} */}
        {pokemonData.pokemon.map((element) => (
          <Pokecard dataPokemon={element} />
        ))}
      
      </div>
    </React.Fragment>
  );
};

export default Pokedex;
