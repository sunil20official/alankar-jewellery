import React from 'react';
import '../heroSection/HeroSection.css';
import VideoBg from '../../assets/videoBg.mp4';

const HeroSection = () => {
	return (
		<div className='heroSection_main'>
			<video
				src={VideoBg}
				preload='auto'
				autoPlay
				loop
				muted
				playsinline
				alt='background video for herosection'
			></video>
			<div className='heroSection_content'>
				<h1>Alankar Jewellars</h1>
				<p>It will be Your Lucky One</p>
			</div>
		</div>
	);
};

export default HeroSection;
