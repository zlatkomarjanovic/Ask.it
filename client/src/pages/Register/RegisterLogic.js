import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { trueFalse } from '../../features/isAuthenticated';
import { register } from '../../features/register';
import { onSubmitForm } from '../../services/services';

const RegisterLogic = () => {
	const dispatch = useDispatch();
	const inputs = useSelector((state) => state.register.value);
	const { ime, prezime, username, email, password } = inputs;
	const body = { ime, prezime, username, email, password };

	//destructuring the inputs

	//populating the state
	const onChange = (e) => {
		dispatch(register({ ...inputs, [e.target.name]: e.target.value }));
	};

	//submiting the form to the backend
	async function submitTheForm(e) {
		const res = await onSubmitForm(e, body);

		if (res.jwtToken) {
			toast.success('😊 Registered successfully! Thank you!');
			localStorage.setItem('token', res.jwtToken);
			dispatch(trueFalse(true));
		} else {
			dispatch(trueFalse(false));
			toast.warning(res);
		}
	}

	return {
		submitTheForm,
		ime,
		onChange,
		prezime,
		email,
		password,
		username,
	}; //returning all the necessary values
};

export default RegisterLogic;
