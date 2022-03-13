import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAskQuestion } from '../../features/askQuestion';
import { setQuestions } from '../../features/questions';
import { GetCurrentUser } from '../../services/services';

const QuestionsLogic = () => {
	const questionToAsk = useSelector((state) => state.askQuestion.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const dispatch = useDispatch();

	const { title } = questionToAsk;

	const fetchQuestions = async () => {
		try {
			const response = await fetch('http://localhost:5000/questions');

			const parseRes = await response.json();
			console.log(parseRes.reverse());

			dispatch(setQuestions(parseRes));
		} catch (error) {
			console.error(error.message);
		}
	};

	const ask = async () => {
		const postedby = currentProfile[0]?.email;
		const body = { postedby, title };

		try {
			await fetch('http://localhost:5000/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
		} catch (error) {
			console.error(error);
		}
	};

	const onChange = (e) => {
		dispatch(
			setAskQuestion({ ...questionToAsk, [e.target.name]: e.target.value })
		);
		console.log(questionToAsk);
	};

	useEffect(() => {
		fetchQuestions();
		GetCurrentUser();
	}, []);

	return { fetchQuestions, onChange, ask, questionToAsk };
};

export default QuestionsLogic;
