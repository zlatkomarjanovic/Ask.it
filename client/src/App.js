import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import {
	Homepage,
	Login,
	MyQuestions,
	Profile,
	Questions,
	Register,
} from './pages';
import Footer from './components/Footer/Footer';

const App = () => {
	async function isAuthen() {
		try {
			const response = await fetch('http://localhost:5000/auth/verify', {
				method: 'POST',
				headers: { token: localStorage.token },
			});

			const parsedRes = await response.json();

			parsedRes === true ? setAuth(true) : setAuth(false);
		} catch (error) {
			console.error(error.message);
		}
	}

	useEffect(() => {
		isAuthen();
	});

	const [isAuth, setIsAuth] = useState(false);

	const setAuth = (boolean) => {
		setIsAuth(boolean);
	};

	return (
		<>
			<Router>
				<Navbar setAuth={setAuth} isAuth={isAuth} />
				<div style={{ height: '80vh' }}>
					<Routes>
						<Route exact path='/' element={<Homepage />} />
						<Route exact path='/my-questions' element={<MyQuestions />} />
						<Route exact path='/profile' element={<Profile />} />
						<Route exact path='/questions' element={<Questions />} />

						<Route
							exact
							path='/register'
							element={isAuth ? <Navigate to='/' /> : <Register />}
						/>
						<Route
							exact
							path='/login'
							element={isAuth ? <Navigate to='/' /> : <Login />}
						/>
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
};

export default App;
