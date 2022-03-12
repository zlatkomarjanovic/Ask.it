import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProfile } from '../../features/currentProfile';

const ProfileLogic = () => {
	const dispatch = useDispatch();

	const getCurrentUser = async () => {
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

	useEffect(() => {
		getCurrentUser();
	}, []);

	return {};
};

export default ProfileLogic;
