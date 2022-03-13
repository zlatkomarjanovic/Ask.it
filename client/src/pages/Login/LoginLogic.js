import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';
import { login } from '../../features/login';

const LoginLogic = () => {
	const dispatch = useDispatch();
	const inputs = useSelector((state) => state.login.value);

	//destructuring the inputs
	const { email, password } = inputs;

	//setting the inputs
	const onChange = (e) => {
		dispatch(login({ ...inputs, [e.target.name]: e.target.value }));
	};

	//submiting the form
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };

			const response = await fetch('http://localhost:5000/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem('token', parseRes.jwtToken);

			if (parseRes.jwtToken) {
				toast.success('Logged in successfully');
				localStorage.setItem('token', parseRes.jwtToken);
				dispatch(trueFalse(true));
			} else {
				dispatch(trueFalse(false));

				toast.error(parseRes);
			}
		} catch (error) {
			toast.warning(error);
			console.error(error.message);
		}
	};
	//returning the necessary values
	return { onSubmitForm, email, onChange, password };
};

export default LoginLogic;
