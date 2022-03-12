import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import isAuth from './features/isAuthenticated';
import questions from './features/questions';
import currentProfile from './features/currentProfile';
import register from './features/register';
import login from './features/login';

const store = configureStore({
	reducer: {
		isAuth: isAuth,
		questions: questions,
		currentProfile: currentProfile,
		register: register,
		login: login,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
