import { useSelector } from 'react-redux';
import { useState } from 'react';

const TrendingLogic = () => {
	const [loadMore, setLoadMore] = useState(20);
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, loadMore);
	const filteredQuestions = Array.from(newQuestions).filter(
		(question) => question.upvotes >= 20
	);

	return { filteredQuestions, setLoadMore, loadMore };
};

export default TrendingLogic;
