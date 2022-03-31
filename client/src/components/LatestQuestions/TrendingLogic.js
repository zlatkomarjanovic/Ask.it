import { useState } from 'react';
import { useSelector } from 'react-redux';

const TrendingLogic = () => {
	const [loadMore, setLoadMore] = useState(20);
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, loadMore);

	return { newQuestions, loadMore, setLoadMore };
};

export default TrendingLogic;
