import { useSelector } from 'react-redux';

const TrendingLogic = () => {
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, 4);

	return { newQuestions };
};

export default TrendingLogic;
