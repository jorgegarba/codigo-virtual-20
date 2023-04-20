import Producto from './Producto';
import { productosData } from './productosData';

const Productos = () => {
	return (
		<div className="row">
			{productosData.map((prod, i) => (
				<Producto prod={prod} key={i} />
			))}
		</div>
	);
};

export default Productos;
