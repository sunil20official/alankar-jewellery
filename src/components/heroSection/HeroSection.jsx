import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/model/HomeJewel1.jpg';
import img2 from '../../assets/model/HomeJewel2.jpg';
import img3 from '../../assets/model/HomeJewel3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSection.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				// pagination={{
				// 	clickable: true,
				// }}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className='mySwiper'
			>
				<div>
					<SwiperSlide>
						<img src={img1} alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} alt='' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} alt='' />
					</SwiperSlide>
				</div>

				{/* <div className='autoplay-progress' slot='container-end'>
					<svg viewBox='0 0 48 48' ref={progressCircle}>
						<circle cx='24' cy='24' r='20'></circle>
					</svg>
					<span ref={progressContent}></span>
				</div> */}
			</Swiper>
		</>
	);
}
