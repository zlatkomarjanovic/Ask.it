import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { trueFalse } from './features/isAuthenticated';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { getAllComments, GetCurrentUser } from './services/services';
import { setCurrentProfile } from './features/currentProfile';
import { setComments } from './features/comments';
import { isAuthen } from './services/services';

const AppLogic = () => {
	const dispatch = useDispatch();

	const Authenticate = async () => {
		const parsedResponse = await isAuthen();
		parsedResponse === true
			? dispatch(trueFalse(true))
			: dispatch(trueFalse(false));
	};

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

	useEffect(() => {
		setUser();
		Authenticate();
		getComments();
		toast.configure();
	});
	return { isAuthen };
};

export default AppLogic;
