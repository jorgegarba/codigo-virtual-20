import Products from './components/products';
const App = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">FILTRADOR</div>
				<div className="col-md-9">
					<Products />
				</div>
			</div>
		</div>
	);
};

export default App;
