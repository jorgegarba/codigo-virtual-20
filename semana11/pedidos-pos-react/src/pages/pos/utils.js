import { platosArray } from '../../mock/fakeData';

export const getPlatoByPlatoId = (platoId) => ({
	...platosArray.find((plato) => plato.id === platoId)
});
