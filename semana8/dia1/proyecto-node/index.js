// const axios = require('axios');
import axios from 'axios';
import miSuma, { getNameAndAbilities, saludar } from './utils.js';
// import miSuma from './utils.js';

console.log('hola mundo, proyecto nuevo!');

axios.get('https://pokeapi.co/api/v2/pokemon/4/').then((data) => {
	const pokemon = getNameAndAbilities(data.data);
	console.log(pokemon);
});

console.log(miSuma(5, 50));

saludar();
