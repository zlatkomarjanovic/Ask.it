import React from 'react';
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
import { useSelector } from 'react-redux';
import AppLogic from './AppLogic';

const App = () => {
	const isAuth = useSelector((state) => state.isAuth.value);
	const {} = AppLogic();
	return (
		<>
			<Router>
				<Navbar />
				<div style={{ position: 'relative', minHeight: '100vh' }}>
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

					<Footer />
				</div>
			</Router>
		</>
	);
};

export default App;
