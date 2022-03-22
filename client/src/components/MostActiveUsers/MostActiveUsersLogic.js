import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setMostActiveUsers } from '../../features/mostActiveUsers';
import { GetMostActiveUsers } from '../../services/services';
const MostActiveUsersLogic = () => {
	const dispatch = useDispatch();
	const mostActiveUsersData = useSelector(
		(state) => state.mostActiveUsers.value
	);

	async function setUsers() {
		const user = await GetMostActiveUsers();

		dispatch(setMostActiveUsers(user));
	}

	useEffect(() => {
		setUsers();
	}, []);

	return { mostActiveUsersData };
};

export default MostActiveUsersLogic;
