function Articulo(props) {
	console.log('props', props);

	const { titulo, imagen, desc } = props.info;

	return (
		<div>
			<h3>{titulo}</h3>
			<img src={imagen} alt="" />
			<p>{desc}</p>
		</div>
	);
}

export default Articulo;
