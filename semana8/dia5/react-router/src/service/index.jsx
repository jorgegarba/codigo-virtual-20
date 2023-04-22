// este complknente sera nuestro conmatiner de apis...

//uina buena practica es tener la url del api en una variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

//vamos a contruir una funcion generiac el cual se encargue de hacer las peticiones desde este nuevo component

//url toma el valor de link.com
//getDataFrom pokemon (link.com)

 export const getDataFromPokemon = async (url = BASE_URL) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


