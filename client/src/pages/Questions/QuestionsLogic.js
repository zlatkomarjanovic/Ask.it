import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAskQuestion } from '../../features/askQuestion';
import { setQuestions } from '../../features/questions';
import { ask, fetchQuestions, GetCurrentUser } from '../../services/services';
import { setCurrentProfile } from '../../features/currentProfile';

const QuestionsLogic = () => {
	const questionToAsk = useSelector((state) => state.askQuestion.value);
	const currentProfile = useSelector((state) => state.currentProfile.value);
	const dispatch = useDispatch();
	const { title } = questionToAsk;
	const { username, user_id, email } = currentProfile[0];
	const postedbyusr = username;
	const postedby = user_id;
	const postedbyemail = email;
	const body = { postedbyusr, postedby, title, postedbyemail };

	async function setUser() {
		const user = await GetCurrentUser();
		dispatch(setCurrentProfile(user));
	}

	async function setQuestionList() {
		const questions = await fetchQuestions();
		dispatch(setQuestions(questions.reverse()));
	}
	async function askTheQuestion(e) {
		await ask(e, body);
	}

	const onChange = (e) => {
		dispatch(
			setAskQuestion({ ...questionToAsk, [e.target.name]: e.target.value })
		);
	};

	useEffect(() => {
		setUser();
		setQuestionList();
	}, []);

	return { fetchQuestions, onChange, askTheQuestion, questionToAsk };
};

export default QuestionsLogic;
