import React from 'react';
import './OurCreations.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadComponent from '../shared/headingcomponent/HeadingComponent';

// Images
import Image1 from '../../assets/watchs/Watch3.jpg';
import Image2 from '../../assets/creationsImage/PNeckLace.png';
import Image3 from '../../assets/creationsImage/Bangal2.jpg';
import Image4 from '../../assets/creationsImage/Bangal2.jpg';
import Image5 from '../../assets/creationsImage/Bangal3.jpg';
import Image6 from '../../assets/creationsImage/Bangal4.jpg';

// Import Swiper styles
import 'swiper/css';

const OurCreations = () => {
	return (
		<div className='creation-container'>
			<HeadComponent
				heading={'Our Creations'}
				paragraph={'Discover a variety of our pieces.'}
			/>
			<div className='creation-swiper-container'>
				<Swiper
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image1} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image2} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image3} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image4} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image5} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image6} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image1} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image1} alt='creationsImage' />
					</SwiperSlide>
					<SwiperSlide style={{ border: '1px solid #f2f2f2' }}>
						<img src={Image1} alt='creationsImage' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default OurCreations;
