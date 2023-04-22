import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../service";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";

import "../../App.css"
import React from "react";
import PokemonDetail from "../../components/PokemonDetail";

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

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
    <Container>
      <h1 className="title-pokemon">POKEDEX g20</h1>
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            //aca el codigo visual
            <Grid item md={4} lg={4} sm={12} xs={12}>
              <Card className="card-pokemon">
                <CardMedia
                  component="img"
                  className="img-pokemon"
                  image={`${imgUrl}${index + 1}.svg`}
                />
                <CardContent className="center">
                  <h3 className="name-pokemon">{pokemon.name}</h3>
                  <PokemonDetail/>
                </CardContent>               
              </Card>              
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Pokemon;
