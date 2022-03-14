import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProfile } from '../../features/currentProfile';
import { setQuestions } from '../../features/questions';
import { fetchQuestions, GetCurrentUser } from '../../services/services';

const MyQuestionsLogic = () => {
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const questions = useSelector((state) => state.questions.value);
	const dispatch = useDispatch();

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
	return { questions, currentProfile };
};

export default MyQuestionsLogic;
