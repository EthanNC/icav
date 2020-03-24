import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo" style={{marginTop: '13px'}} />
					</span>
					<a className="navbar-item">
						ICAV
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<a href="" className="navbar-item">
							About
						</a>
						<a href="" className="navbar-item">
							Contact Us
						</a>

					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
