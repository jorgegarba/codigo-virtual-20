import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMesas } from '../../../services/mesasService';

export const PosContext = createContext();

const PosState = (props) => {
	const { children } = props;

	const [mesaSeleccionada, setMesaSeleccionada] = useState({ nro: '', id: 0 });
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
		id: 0,
		nombre: ''
	});
	const [mesas, setMesas] = useState([]);

	/**
	 *[
			{
					platos: [
							{ platoId: 1, cantidad: 6 },
							{ platoId: 3, cantidad: 2 }
					],
					mesaId: 4
			}
		]
	 */
	const [pedidos, setPedidos] = useState([]);

	/**
	 *
	 * @param {*} platoId
	 * @param {*} accion "sumar" "restar"
	 */
	const modificarPedido = (platoId, accion) => {
		const copiaPedidos = [...pedidos];
		// 1. preguntar si hay una mesa actualmente seleccionada
		if (mesaSeleccionada.nro) {
			// 2. preguntar si existe un pedido para la mesa seleccionada actual
			const pedidoActual = pedidos.find(
				(pedido) => pedido.mesaId === mesaSeleccionada.id
			);
			// 3. preguntar si el pedido encontrado existe, lo que implica que el arreglo de pedidos
			// ya tenía abierta la comanda, es decir, con al menos un plato
			if (pedidoActual) {
				// 4. Buscamos el id del plato que deseo agregar para sumar cantidad o crear
				// la primera unidad del plato.
				const platoPedidoActual = pedidoActual.platos.find(
					(plato) => plato.platoId === platoId
				);
				// 5. preguntamos si el plato ya existía en esa mesa
				if (platoPedidoActual) {
					// en este punto todo depende de la acción
					if (accion === 'sumar') {
						platoPedidoActual.cantidad += 1;
					} else {
						if (platoPedidoActual.cantidad > 1) {
							platoPedidoActual.cantidad -= 1;
						} else {
							pedidoActual.platos = pedidoActual.platos.filter(
								(plato) => plato.platoId !== platoId
							);
						}
					}
				} else {
					if (accion === 'sumar') {
						// creamos la primera unidad del plato que queremos agregar a la mesa
						pedidoActual.platos.push({ platoId: platoId, cantidad: 1 });
					} else {
						return;
					}
					// está demás indicar la sentencia else puesto que, si restamos un plato que no existía en la mesa
					// no debemos realizar ninguna acción.
				}
				setPedidos([...copiaPedidos]);
			} else {
				// Significa que la mesa estaba vacía y que debemos crear el pedido que incluya la primera unidad
				// del plato que deseamos consumir
				if (accion === 'sumar') {
					copiaPedidos.push({
						platos: [{ platoId: platoId, cantidad: 1 }],
						mesaId: mesaSeleccionada.id
					});
					setPedidos([...copiaPedidos]);
				}
			}
		} else {
			// TODO mostrar alerta de advertencia
		}
	};

	useEffect(() => {
		getMesas().then((data) => {
			setMesas(data);
		});
	}, []);

	return (
		<PosContext.Provider
			value={{
				mesaSeleccionada: mesaSeleccionada,
				setMesaSeleccionada: setMesaSeleccionada,
				categoriaSeleccionada: categoriaSeleccionada,
				setCategoriaSeleccionada: setCategoriaSeleccionada,
				pedidos: pedidos,
				modificarPedido: modificarPedido
			}}
		>
			{children}
		</PosContext.Provider>
	);
};

PosState.propTypes = {
	children: PropTypes.node.isRequired
};

export default PosState;
