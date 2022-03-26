import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';
import { login } from '../../features/login';
import { onSubmitLogin } from '../../services/services';

const LoginFormLogic = () => {
	const dispatch = useDispatch();
	const inputs = useSelector((state) => state.login.value);
	const { email, password } = inputs;
	const body = { email, password };

	//setting the inputs
	const onChange = (e) => {
		dispatch(login({ ...inputs, [e.target.name]: e.target.value }));
	};

	//submiting the form

	async function submitTheLogin(e) {
		const res = await onSubmitLogin(e, body);
		if (res.jwtToken) {
			toast.success(`👋 Well hello there, welcome back!`);
			localStorage.setItem('token', res.jwtToken);
			dispatch(trueFalse(true));
		} else {
			dispatch(trueFalse(false));

			toast.error(res);
		}
	}

	//returning the necessary values
	return { submitTheLogin, email, onChange, password };
};

export default LoginFormLogic;
