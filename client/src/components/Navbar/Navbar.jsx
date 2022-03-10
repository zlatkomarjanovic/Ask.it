import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ setAuth, isAuth }) => {
	const logout = async (e) => {
		e.preventDefault();
		try {
			localStorage.removeItem('token');
			setAuth(false);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<nav className='navbar navbar-expand-md bg-dark navbar-dark fixed-top'>
				<div className='navbar-brand'>Ask.it</div>

				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavbar'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='collapsibleNavbar'>
					<ul className='navbar-nav'>
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/' exact>
								Homepage
							</NavLink>
						</li>
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/my-questions' exact>
								MyQuestions
							</NavLink>
						</li>
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/profile' exact>
								Profile
							</NavLink>
						</li>
						<li className='nav-item mx-3'>
							<NavLink className='nav-link h4' to='/questions' exact>
								Questions
							</NavLink>
						</li>
						{isAuth === true ? (
							<>
								<li className='nav-item mx-5'>
									<div className='nav-link h4'>
										<button className='btn btn-info' onClick={(e) => logout(e)}>
											Log out
										</button>
									</div>
								</li>
							</>
						) : (
							<>
								<li className='nav-item mx-3'>
									<NavLink className='nav-link h4' to='/register' exact>
										Register
									</NavLink>
								</li>
								<li className='nav-item mx-3'>
									<NavLink className='nav-link h4' to='/login' exact>
										Login
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
