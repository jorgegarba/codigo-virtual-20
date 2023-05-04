import PropTypes from 'prop-types';
const Step2 = (props) => {
	const { nextStep, backStep } = props;

	return (
		<div>
			<button className="btn btn-primary" onClick={() => backStep()}>
				Anterior
			</button>
			<button className="btn btn-primary" onClick={() => nextStep()}>
				Siguiente
			</button>
		</div>
	);
};

Step2.propTypes = {
	nextStep: PropTypes.func.isRequired,
	backStep: PropTypes.func.isRequired
};

export default Step2;
