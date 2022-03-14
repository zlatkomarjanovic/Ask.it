import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setSingleQuestion } from '../../features/singleQuestion';
import { fetchQuestion } from '../../services/services';

const QuestionDetailsLogic = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const singleQuestion = useSelector((state) => state.singleQuestion.value);
	async function getQuestion() {
		const res = await fetchQuestion(id);
		dispatch(setSingleQuestion(res));
	}

	useEffect(() => {
		getQuestion();
	}, []);

	return { singleQuestion };
};

export default QuestionDetailsLogic;
