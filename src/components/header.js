import React from 'react';

import './style.scss';

import gatsbyLogo from '../images/logo.svg';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
			<img src={gatsbyLogo} alt="gatsby-logo" />
				<article className="media">
					<div className="media-content">
						<div className="content">
							<header className="is-size-2 has-text-black">
								<b>I</b>nternational
								<br/>
								<b>C</b>onsortium
								<br/>
								<b>A</b>nti 
								<b>V</b>irals
							
							</header>
							<p className="subtitle has-text-back is-size-3">
								New Medicines for Global Infectious Diseases{' '}
								<a
									className="button is-info is-inverted"
									href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
								>
									<span>Contact Us</span>
								</a>
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
