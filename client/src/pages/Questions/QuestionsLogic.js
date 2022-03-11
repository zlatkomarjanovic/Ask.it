import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../../features/questions';

const QuestionsLogic = () => {
	const dispatch = useDispatch();
	const fetchQuestions = async () => {
		try {
			const response = await fetch('http://localhost:5000/questions');

			const parseRes = await response.json();
			console.log(parseRes);
			dispatch(setQuestions(parseRes));
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	return { fetchQuestions };
};

export default QuestionsLogic;
