export const getPlatoByPlatoId = (platoId, platosArray) => {
	return {
		...platosArray.find((plato) => plato.id === platoId)
	};
};
