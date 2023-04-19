function Articulo(props) {
	console.log('props', props);

	const { titulo, imagen, desc } = props.info;

	return (
		<div className="articulo">
			<h3>{titulo}</h3>
			<img src={imagen} alt="" />
			<p>{desc}</p>
			<button className="btn btn-outline-primary">Ver mas</button>
		</div>
	);
}

export default Articulo;
