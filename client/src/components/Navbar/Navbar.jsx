import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';
import { toast } from 'react-toastify';
import { AiFillQuestionCircle } from 'react-icons/ai';

const Navbar = () => {
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
	return (
		<>
			<nav className='shadow navbar navbar-expand-md nav-backg navbar-dark fixed-top noborder text-decoration-none'>
				<div className='navbar-brand no-brand'>
					<AiFillQuestionCircle className='mx-2 mb-2' size={30} />
					Askit
				</div>

				<button
					className='navbar-toggler ml-auto mx-4'
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavbar'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='col collapse navbar-collapse col-12'
					id='collapsibleNavbar'
				>
					<ul className='navbar-nav'>
						<li className='nav-item mx-3 mt-3'>
							<NavLink className='nav-link h4 text-decoration-none' to='/'>
								Homepage
							</NavLink>
						</li>
						<li className='nav-item mx-3 mt-3'>
							<NavLink
								className='nav-link h4 text-decoration-none'
								to='/questions'
							>
								Questions
							</NavLink>
						</li>
						{isAuth ? (
							<>
								<li className='nav-item mx-3 mt-3'>
									<NavLink
										className='nav-link h4 text-decoration-none'
										to='/my-questions'
									>
										MyQuestions
									</NavLink>
								</li>
								<li className='nav-item mx-3 mt-3'>
									<NavLink
										className='nav-link h4 text-decoration-none'
										to='/profile'
									>
										Profile
									</NavLink>
								</li>
								<li className='nav-item mx-5 float-right mt-3'>
									<div className='nav-link h4 right'>
										<button
											className='btn glass-button-register text-light'
											onClick={(e) => logout(e)}
										>
											Log out
										</button>
									</div>
								</li>
							</>
						) : (
							<div className='d-flex right'>
								<li className='nav-item mx-3 mt-2'>
									<NavLink
										className='nav-link h4 text-decoration-none'
										to='/register'
									>
										<button className='btn glass-button-register text-light'>
											Register
										</button>
									</NavLink>
								</li>
								<li className='nav-item  mx-3 mt-2'>
									<NavLink
										className='nav-link h4 text-decoration-none'
										to='/login'
									>
										<button className='btn glass-button-register text-light'>
											Login
										</button>
									</NavLink>
								</li>
							</div>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
