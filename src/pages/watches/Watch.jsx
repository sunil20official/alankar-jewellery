import React from 'react';
import './Watch.css';

import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';

const Watch = () => {
	return (
		<div className='watch-section-container'>
			<div className='container-fluid'>
				<img src={image1} style={{ height: '100vh', width: '100%' }} alt='' />
			</div>
			<div className='div'></div>
			<div className='div'></div>
			<div className='div'></div>
		</div>
	);
};

export default Watch;
