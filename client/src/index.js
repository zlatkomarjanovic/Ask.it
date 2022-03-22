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
import updateProfile from './features/updateProfile';
import askQuestion from './features/askQuestion';
import singleQuestion from './features/singleQuestion';
import postComment from './features/postComment';
import comments from './features/comments';
import myQuestions from './features/myQuestions';
import mostActiveUsers from './features/mostActiveUsers';
import singleQuestionComments from './features/singleQuestionComments';

const store = configureStore({
	reducer: {
		isAuth: isAuth,
		questions: questions,
		currentProfile: currentProfile,
		register: register,
		login: login,
		updateProfile: updateProfile,
		askQuestion: askQuestion,
		singleQuestion: singleQuestion,
		postComment: postComment,
		comments: comments,
		myQuestions: myQuestions,
		mostActiveUsers: mostActiveUsers,
		singleQuestionComments: singleQuestionComments,
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
