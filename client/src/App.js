import './App.css';
import { Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage, MyQuestions, Profile, Questions, Register } from './pages';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					<Route exact path='/my-questions' element={<MyQuestions />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/questions' element={<Questions />} />
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
