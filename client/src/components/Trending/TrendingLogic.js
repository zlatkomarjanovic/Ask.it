import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions } from '../../features/questions';
import { fetchQuestions } from '../../services/services';

const TrendingLogic = () => {
	const dispatch = useDispatch();
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, 4);

	async function setQuestionList() {
		const questions = await fetchQuestions();
		dispatch(setQuestions(questions.reverse()));
	}

	useEffect(() => {
		setQuestionList();
	}, []);
	return { newQuestions };
};

export default TrendingLogic;
