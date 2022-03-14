import { useSelector } from 'react-redux';
import { useState } from 'react';

const TrendingLogic = () => {
	const [loadMore, setLoadMore] = useState(20);
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, loadMore);

	return { newQuestions, setLoadMore, loadMore };
};

export default TrendingLogic;
