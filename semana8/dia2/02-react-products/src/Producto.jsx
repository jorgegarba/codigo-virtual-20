const Producto = (props) => (
	<div className="col-md-3">
		<div className="card">
			<img src={props.prod.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.prod.title}</h5>
				<p className="card-text">{props.prod.description}</p>
				<a href="#" className="btn btn-primary">
					Ver más
				</a>
			</div>
		</div>
	</div>
);

export default Producto;
