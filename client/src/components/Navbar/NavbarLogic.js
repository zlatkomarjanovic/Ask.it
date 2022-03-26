import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { trueFalse } from '../../features/isAuthenticated';

const NavbarLogic = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.isAuth.value);

	const logout = async (e) => {
		e.preventDefault();
		try {
			localStorage.removeItem('token');
			dispatch(trueFalse(false));
			toast.info('Logged out successfully!');
		} catch (err) {
			console.error(err.message);
			toast.warning(err.message);
		}
	};

	return { logout, isAuth, dispatch };
};

export default NavbarLogic;
