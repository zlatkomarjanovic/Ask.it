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
	QuestionDetails,
	ErrorPage,
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
						<Route
							exact
							path='/my-questions'
							element={isAuth ? <MyQuestions /> : <Navigate to='/login' />}
						/>
						<Route
							exact
							path='/profile'
							element={isAuth ? <Profile /> : <Navigate to='/login' />}
						/>
						<Route exact path='/questions' element={<Questions />} />
						<Route
							exact
							path='/questions/:id'
							element={isAuth ? <QuestionDetails /> : <Navigate to='/login' />}
						/>
						<Route exact path='*' element={<ErrorPage />} />

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
