import React, { useState } from 'react';

const Register = () => {
	const [inputs, setInputs] = useState({
		ime: '',
		prezime: '',
		email: '',
		password: '',
	});

	const { ime, prezime, email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: [e.target.value] });
	};

	return (
		<div className='container'>
			<h1 className='text-center my-5'>Register</h1>
			<form>
				<input
					type='text'
					name='ime'
					placeholder='Ime'
					className='form-control my-3'
					value={ime}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='text'
					name='prezime'
					placeholder='Prezime'
					className='form-control my-3'
					value={prezime}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='email'
					name='email'
					placeholder='E-mail'
					className='form-control my-3'
					value={email}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='form-control my-3'
					value={password}
					onChange={(e) => onChange(e)}
				/>
				<button className='btn btn-info btn-block'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
