import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateQuestion } from '../../features/updateQuestion';
import { updateQuestion } from '../../services/services';

const PartialsLogic = () => {
	const dispatch = useDispatch();
	const { title } = useSelector((state) => state.updateQuestion.value);

	const onChange = (e) => {
		e.preventDefault();
		dispatch(setUpdateQuestion({ [e.target.name]: e.target.value }));
	};

	const onSubmit = async (e, question_id) => {
		e.preventDefault();
		await updateQuestion(question_id, title);
	};

	return { onChange, onSubmit, title };
};

export default PartialsLogic;
