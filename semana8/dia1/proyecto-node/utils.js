export const getNameAndAbilities = (pokemon) => {
	const result = {
		name: pokemon.name,
		abilities: pokemon.abilities.map((abi) => {
			return abi.ability.name;
		})
	};
	return result;
};
