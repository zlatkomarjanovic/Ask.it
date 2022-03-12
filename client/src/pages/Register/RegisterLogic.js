import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';
import { register } from '../../features/register';

const RegisterLogic = () => {
	const dispatch = useDispatch();
	const inputs = useSelector((state) => state.register.value);

	const { ime, prezime, email, password } = inputs;

	//populating the state
	const onChange = (e) => {
		dispatch(register({ ...inputs, [e.target.name]: e.target.value }));
	};

	//submiting the form to the backend
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { ime, prezime, email, password };

			const response = await fetch('http://localhost:5000/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			localStorage.setItem('token', parseRes.jwtToken);
			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				dispatch(trueFalse(true));
			} else {
				dispatch(trueFalse(true));
			}
		} catch (error) {
			console.error(error.message);
		}
	};
	return {
		onSubmitForm,
		ime,
		onChange,
		prezime,
		email,
		password,
	}; //returning all the necessary values
};

export default RegisterLogic;
