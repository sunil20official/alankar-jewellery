import React from 'react';
import '../heroSection/HeroSection.css';
import VideoBg from '../../assets/videoBg.mp4';

const HeroSection = () => {
	return (
		<div className='heroSection_main'>
			<video src={VideoBg} autoPlay loop muted></video>
			<div className='heroSection_content'>
				<h1>Alankar Jewellary</h1>
				<p>It will be Your Lucky One</p>
			</div>
		</div>
	);
};

export default HeroSection;