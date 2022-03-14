import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { trueFalse } from '../../features/isAuthenticated';
import { register } from '../../features/register';

const RegisterLogic = () => {
	const dispatch = useDispatch();
	const inputs = useSelector((state) => state.register.value);

	//destructuring the inputs
	const { ime, prezime, username, email, password } = inputs;

	//populating the state
	const onChange = (e) => {
		dispatch(register({ ...inputs, [e.target.name]: e.target.value }));
		console.log(inputs);
	};

	//submiting the form to the backend
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { ime, prezime, username, email, password };

			const response = await fetch('http://localhost:5000/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem('token', parseRes.jwtToken);

			if (parseRes.jwtToken) {
				toast.success('Registered successfully!');
				localStorage.setItem('token', parseRes.jwtToken);
				dispatch(trueFalse(true));
			} else {
				dispatch(trueFalse(false));
				toast.warning(parseRes);
			}
		} catch (error) {
			console.error(error.message);
			toast.warning(error.message);
		}
	};
	return {
		onSubmitForm,
		ime,
		onChange,
		prezime,
		email,
		password,
		username,
	}; //returning all the necessary values
};

export default RegisterLogic;
