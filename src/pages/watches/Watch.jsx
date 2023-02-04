import React from 'react';
import './Watch.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';
import ButtonComponent from '../../components/shared/buttonComponent/ButtonComponent';

import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';
import w1 from '../../assets/watchs/Watch1.jpg';
import w2 from '../../assets/watchs/Watch2.jpg';
import w3 from '../../assets/watchs/Watch3.jpg';
import w4 from '../../assets/watchs/Watch4.jpg';
import w5 from '../../assets/watchs/Watch5.jpg';
import w6 from '../../assets/watchs/Watch6.jpg';
import w7 from '../../assets/watchs/Watch7.jpg';
import w8 from '../../assets/watchs/Watch7.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

const Watch = () => {
	const watches = [w1, w2, w3, w4, w5, w6, w7, w8];
	return (
		<div className='watch-section-container'>
			<div className='container-top'>
				<img src={image1} style={{ width: '100%' }} alt='watch-top-image' />
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
					marginTop={'0px'}
				/>
			</div>
			<div className='watch-container'>
				<div className='watch-grid'>
					{watches.map((item) => (
						<div className='item-container'>
							<LazyLoadImage
								style={{ width: '100%' }}
								src={item}
								effect='blur'
								alt='collection of pics from alankar store'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='div'>
				<ButtonComponent />
			</div>
		</div>
	);
};

export default Watch;
