import React from 'react';
import './Carousel.css';
import image1 from '../../assets/Caruosel/Image1.jpg';
import { Pagination } from 'swiper';

// images
import Slide1 from '../../assets/Caruosel/GoldNeckLace.jpg';
import Slide2 from '../../assets/Caruosel/GoldNeckLace2.jpg';
import Slide3 from '../../assets/Caruosel/Necklace.jpg';
import Slide4 from '../../assets/Caruosel/WhiteNeckLace.jpg';
import Slide5 from '../../assets/Caruosel/GreenEmerald.jpg';
import Slide6 from '../../assets/Caruosel/WGNeckLace.jpg';
import Slide7 from '../../assets/Caruosel/EleNeckLace.jpg';
import Slide8 from '../../assets/Caruosel/GoldEarRings.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	},
};

const Carousel = () => {
	return (
		<div>
			<div className='carousel-container'>
				<div className='carousel-section' style={{ background: 'yellowgreen' }}>
					<Swiper
						// spaceBetween={50}
						// slidesPerView={3}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
						pagination={pagination}
						modules={[Pagination]}
						className='mySwiper'
					>
						<SwiperSlide>
							<img src={Slide1} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide2} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide3} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide4} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide5} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide6} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide7} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={Slide8} alt='' />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='carousel-left-Image'>
					<img src={image1} alt='' className='carousel-img' />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
