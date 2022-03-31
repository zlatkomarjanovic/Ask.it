import { useSelector } from 'react-redux';
import { useState } from 'react';

const HotQuestionsLogic = () => {
	const [loadMore, setLoadMore] = useState(20);
	const questions = useSelector((state) => state.questions.value);
	const newQuestions = questions.slice(0, loadMore);
	const filter = Array.from(newQuestions).filter((question) =>
		question.upvotes?.length !== null ? question.upvotes?.length : 0 >= 20
	);

	const filteredQuestions = filter.slice(0, 4);

	return { filteredQuestions, setLoadMore, loadMore };
};

export default HotQuestionsLogic;
