import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
			<h1 className="title is-size-2">The International Consortium on Anti-Virals - USA</h1>
			<p>(ICAV - USA) is a not-for-profit drug discovery and development organization dedicated to inventing new medicines for the treatment of infectious diseases, most especially in developing countries. HIV, influenza, dengue fever, and TB continue to ravage the poorest populations where all too often effective and affordable medicines do not exist. And the most effected are all too often children and mothers.</p>
			<br/>
			<h1 className="title is-size-4"> The global "face" of infectious disease is changing rapidly.</h1>
			<p>
			 Increasing globalization now means that an outbreak of new or re-emergent infectious disease can rapidly spread around the world. Changes in the global climate have altered the geographical distribution of animal and insect species which can serve as vectors for human disease. Modern modes of travel now mean that individuals can rapidly span the globe and, with them, any harbored pathogens. As a result, the "reach" of infectious disease is ever changing and expanding, bringing infectious diseases to people previously isolated from their effects.
			</p>
			<br/>
			<h1 className="title is-size-4">Our Mission</h1>
			<p>
			ICAV - USA's mission is to find and develop new medicines to confront infectious disease where it does the most damage -especially in the developing world. We will be providing the "translational R&D" and clinical development expertise needed to "bridge the innovation gap" between new drug candidates and medicines deployed to patient populations at need. 
			</p>
			<br/>
			<h1 className="title is-size-4">Learning more about our work</h1>
			<p>
			We are based in the metropolitan Boston area, a global hub of biotechnology and pharmaceutical R&D. We are just commencing operations and hope you will join us in seeking to make a difference to millions of lives across the globe.
			</p>
			</div>
		</section>
	</div>
);

export default Midsection;
