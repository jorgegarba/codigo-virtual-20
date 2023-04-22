import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../service";

import React from "react";

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

  const [pokemons, setPokemon] = useState([]);

  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    console.log("lista pokemones", listPokemones.results);
    setPokemon(listPokemones.results);
  };

  //en react existe una funcion llamada useEffecxt la cual se ejecuta cuando la pagina
  //esta inicianco vamos usar useEffcet si queremos ejecutar algo al inicio de la aplicacion

  useEffect(() => {
    //aca llamamois a la funcion
    fetchPokemonList();
    //IMPORTANTE por ahora en los useEffcet debemos colocar un array vacio ]
    //esto se hace para evitar un bucle infinito de peticiones
  }, []);

  return (
    <div>
      <h1>pokemon</h1>
    </div>
  );
};

export default Pokemon;
