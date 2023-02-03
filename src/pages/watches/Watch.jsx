import React from 'react';
import './Watch.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';
import ButtonComponent from '../../components/shared/buttonComponent/ButtonComponent';

import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';
import image2 from '../../assets/creationsImage/Watch3.jpg';
import image3 from '../../assets/watchs/Watch4.jpg';

const Watch = () => {
	return (
		<div className='watch-section-container'>
			<div className='container-top'>
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
					marginTop={'-50px'}
				/>
			</div>
			<div>
				<div
					className='container watch-box d-flex gap-4 mb-3'
					style={{ background: '#fff' }}
				>
					<div className='card w-50'>
						<img src={image2} alt='Watch' />
						<h3>WATCH RADO</h3>
					</div>
					<div className='card w-50'>
						<img src={image3} alt='' /> <h3>WATCH RADO</h3>
					</div>
				</div>
			</div>
			<div>
				<div
					className='container watch-box d-flex gap-4 mb-3'
					style={{ background: '#fff' }}
				>
					<div className='card w-50'>
						<img src={image2} alt='Watch' /> <h3>WATCH RADO</h3>
					</div>
					<div className='card w-50'>
						<img src={image3} alt='' /> <h3>WATCH RADO</h3>
					</div>
				</div>
			</div>
			<div>
				<div
					className='container watch-box d-flex gap-4 mb-3'
					style={{ background: '#fff' }}
				>
					<div className='card w-50'>
						<img src={image2} alt='Watch' /> <h3>WATCH RADO</h3>
					</div>
					<div className='card w-50'>
						<img src={image3} alt='' /> <h3>WATCH RADO</h3>
					</div>
				</div>
			</div>
			<div className='div'>
				<ButtonComponent />
			</div>
		</div>
	);
};

export default Watch;
