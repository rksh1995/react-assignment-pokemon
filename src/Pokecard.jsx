import React from "react";
import "./Pokedex.css";

const Pokecard = (props) => {
  // console.log(props.dataPokemon);
  return (
    <div className="pokeCard">
      <h2>{props.dataPokemon.id}</h2>
      <img className="image" src={props.dataPokemon.image} />
      <h2> {props.dataPokemon.name}</h2>
      <h3>Type : {props.dataPokemon.type}</h3>
    </div>
  );
};

export default Pokecard;
