import { useDispatch } from 'react-redux';
import { setCurrentProfile } from '../features/currentProfile';

//This is a file in which we will centralize all our API calls.
export const GetCurrentUser = async () => {
	const dispatch = useDispatch();
	try {
		const response = await fetch('http://localhost:5000/profile', {
			method: 'GET',
			headers: { token: localStorage.token },
		});

		const parseRes = await response.json();
		dispatch(setCurrentProfile(parseRes));
	} catch (error) {
		console.error(error.message);
	}
};
