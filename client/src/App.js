import React, { useState } from 'react';
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

const App = () => {
	const [isAuth, setIsAuth] = useState(false);

	const setAuth = (boolean) => {
		setIsAuth(boolean);
	};

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					<Route exact path='/my-questions' element={<MyQuestions />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/questions' element={<Questions />} />

					<Route
						exact
						path='/register'
						element={isAuth === true ? <Navigate to='/' /> : <Register />}
					/>
					<Route
						exact
						path='/login'
						element={isAuth === true ? <Navigate to='/' /> : <Login />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
