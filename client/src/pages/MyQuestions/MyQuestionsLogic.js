import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProfile } from '../../features/currentProfile';
import { setQuestions } from '../../features/questions';
import { fetchQuestions, GetCurrentUser } from '../../services/services';

const MyQuestionsLogic = () => {
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const questions = useSelector((state) => state.questions.value);
	const dispatch = useDispatch();
	const [loadMore, setLoadMore] = useState(4);
	const newQuestions = questions.slice(0, loadMore);

	async function setQuestionList() {
		const questions = await fetchQuestions();
		dispatch(setQuestions(questions.reverse()));
	}

	async function setUser() {
		const user = await GetCurrentUser();
		dispatch(setCurrentProfile(user));
	}

	useEffect(() => {
		setQuestionList();
		setUser();
	}, []);
	return { newQuestions, currentProfile, setLoadMore, loadMore };
};

export default MyQuestionsLogic;
