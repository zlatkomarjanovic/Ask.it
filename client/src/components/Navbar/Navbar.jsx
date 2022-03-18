import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { trueFalse } from '../../features/isAuthenticated';
import { toast } from 'react-toastify';

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
			<nav className='navbar navbar-expand-md bg-dark navbar-dark fixed-top noborder'>
				<div className='navbar-brand no-brand'>Askit</div>

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
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/'>
								Homepage
							</NavLink>
						</li>
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/questions'>
								Questions
							</NavLink>
						</li>
						{isAuth ? (
							<>
								<li className='nav-item mx-3'>
									<NavLink className='nav-link h4' to='/my-questions'>
										MyQuestions
									</NavLink>
								</li>
								<li className='nav-item mx-3'>
									<NavLink className='nav-link h4' to='/profile'>
										Profile
									</NavLink>
								</li>
								<li className='nav-item mx-5 float-right'>
									<div className='nav-link h4 float-right'>
										<button
											className='btn btn-info mt-1 float-right'
											onClick={(e) => logout(e)}
										>
											Log out
										</button>
									</div>
								</li>
							</>
						) : (
							<>
								<li className='nav-item mx-3'>
									<NavLink className='nav-link h4' to='/register'>
										<button className='btn btn-primary rounded'>
											Register
										</button>
									</NavLink>
								</li>
								<li className='nav-item  mx-3'>
									<NavLink className='nav-link h4' to='/login'>
										<button className='btn btn-info '>Login</button>
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
