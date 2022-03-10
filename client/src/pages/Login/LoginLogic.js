import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';

const LoginLogic = () => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const dispatch = useDispatch();
	//defining the inputs
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	//destructuring the inputs
	const { email, password } = inputs;

	//setting the inputs
	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
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

			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				dispatch(trueFalse(true));

				toast.success('Logged in Successfully');
			} else {
				dispatch(trueFalse(true));

				toast.error(parseRes);
			}
		} catch (error) {
			console.error(error.message);
		}
	};
	//returning the necessary values
	return { onSubmitForm, email, onChange, password };
};

export default LoginLogic;
