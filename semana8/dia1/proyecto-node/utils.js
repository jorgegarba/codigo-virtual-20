export const getNameAndAbilities = (pokemon) => {
	const result = {
		name: pokemon.name,
		abilities: pokemon.abilities.map((abi) => {
			return abi.ability.name;
		})
	};
	return result;
};

export const saludar = () => console.log('buenas noches!');

const suma = (a, b) => a + b;
/**
 * - Export default, exporta una función o variable
 * por defecto por archivo
 * - Por archivo se permite máximo 1 exportación por defecto.
 */
export default suma;
