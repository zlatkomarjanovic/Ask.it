import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProfile } from '../../features/currentProfile';
import { setQuestions } from '../../features/questions';
import {
	fetchMyQuestions,
	fetchQuestions,
	GetCurrentUser,
} from '../../services/services';
import { setMyQuestions } from '../../features/myQuestions';

const MyQuestionsLogic = () => {
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const myQuestionsList = useSelector((state) => state.myQuestions.value);
	const dispatch = useDispatch();
	const [loadMore, setLoadMore] = useState(4);
	const newQuestions = myQuestionsList.slice(0, loadMore);

	async function setUser() {
		const user = await GetCurrentUser();
		dispatch(setCurrentProfile(user));
	}

	async function getMyQuestions(postedby) {
		await setUser();
		const myQuestions = await fetchMyQuestions(postedby);
		dispatch(setMyQuestions(myQuestions.reverse()));
	}

	useEffect(() => {
		getMyQuestions(currentProfile[0].user_id);
	}, [currentProfile]);
	return {
		newQuestions,
		currentProfile,
		setLoadMore,
		loadMore,
		myQuestionsList,
	};
};

export default MyQuestionsLogic;
