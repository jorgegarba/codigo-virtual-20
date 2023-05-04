import { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import Step1 from './components/step1';
import Step2 from './components/step2';

const App = () => {
	const [stepNumber, setStepNumber] = useState(0);
	const [form1, setForm1] = useState({
		firstName: '',
		lastName: '',
		selectDocumento: ''
	});

	const nextStep = () => {
		if (stepNumber < 1) {
			setStepNumber(stepNumber + 1);
		}
	};

	const backStep = () => {
		setStepNumber(stepNumber - 1);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Stepper activeStep={stepNumber}>
						<Step label="Paso 1" />
						<Step label="Paso 2" />
					</Stepper>
					{stepNumber === 0 && (
						<Step1 nextStep={nextStep} form1={form1} setForm1={setForm1} />
					)}
					{stepNumber === 1 && (
						<Step2 backStep={backStep} nextStep={nextStep} />
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
