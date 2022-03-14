import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { trueFalse } from './features/isAuthenticated';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { getAllComments, GetCurrentUser } from './services/services';
import { setCurrentProfile } from './features/currentProfile';
import { setComments } from './features/comments';

const AppLogic = () => {
	const dispatch = useDispatch();
	async function isAuthen() {
		try {
			const response = await fetch('http://localhost:5000/auth/verify', {
				method: 'POST',
				headers: { token: localStorage.token },
			});

			const parsedRes = await response.json();

			parsedRes === true
				? dispatch(trueFalse(true))
				: dispatch(trueFalse(false));
		} catch (error) {
			console.error(error.message);
		}
	}

	async function setUser() {
		const user = await GetCurrentUser();
		dispatch(setCurrentProfile(user));
	}

	async function getComments() {
		try {
			const res = await getAllComments();

			dispatch(setComments(res));
		} catch (error) {
			console.error(error.message);
		}
	}

	useEffect(async () => {
		await setUser();
		await isAuthen();
		getComments();
		toast.configure();
	});
	return { isAuthen };
};

export default AppLogic;
