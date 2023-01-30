import React from 'react';
import './Watch.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';

import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';

const Watch = () => {
	return (
		<div className='watch-section-container'>
			<div className='container-fluid'>
				<img src={image1} style={{ height: '100vh', width: '100%' }} alt='' />
			</div>
			<div className='div'>
				<HeadingComponent
					heading={'Watchmaking'}
					paragraph={
						'Through its collections, the House of Alankar reinterprets time in the most elegant way.'
					}
					paragraph2={
						'Enter a world of pure luxury and know-how to explore our exceptional creations.'
					}
					marginTop={''}
				/>
			</div>
			<div className='div'></div>
			<div className='div'></div>
		</div>
	)
};

export default Watch;
