import React from 'react';
import './navbar.css';
const Navbar = () => {
	return (
		<>
			<nav class='navbar navbar-expand-md bg-dark navbar-dark fixed-top'>
				<a class='navbar-brand' href='#'>
					Ask.it
				</a>

				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavbar'
				>
					<span class='navbar-toggler-icon'></span>
				</button>

				<div class='collapse navbar-collapse' id='collapsibleNavbar'>
					<ul class='navbar-nav'>
						<li class='nav-item'>
							<a class='nav-link h4' href='#'>
								Homepage
							</a>
						</li>
						<li class='nav-item h4'>
							<a class='nav-link' href='#'>
								MyQuestions
							</a>
						</li>
						<li class='nav-item h4'>
							<a class='nav-link' href='#'>
								Profile
							</a>
						</li>
						<li class='nav-item h4'>
							<a class='nav-link' href='#'>
								Questions
							</a>
						</li>
						<li class='nav-item h4'>
							<a class='nav-link' href='#'>
								Register
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
