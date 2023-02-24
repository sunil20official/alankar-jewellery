import React from 'react';
import './Carousel.css';
import image1 from '../../assets/Caruosel/Image1.jpg';
import { Pagination } from 'swiper';

import ButtonComponent from '../shared/buttonComponent/ButtonComponent';

// images
import Slide1 from '../../assets/model/1.jpg';
import Slide2 from '../../assets/model/2.jpg';
import Slide3 from '../../assets/model/3.jpg';
import Slide4 from '../../assets/model/4.jpg';
import Slide5 from '../../assets/model/5.jpg';
import Slide6 from '../../assets/model/6.jpg';
import Slide7 from '../../assets/model/7.jpg';
import Slide8 from '../../assets/model/8.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + '</span>';
	},
};

const Carousel = () => {
	return (
		<div>
			<div className='carousel-container'>
				<div
					className='carousel-section'
					style={{ backgroundColor: '#88704A', border: '2px solid #fbbc93' }}
				>
					<Swiper
						// spaceBetween={50}
						// slidesPerView={3}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={(swiper) => console.log(swiper)}
						pagination={pagination}
						modules={[Pagination]}
						className='mySwiper'
					>
						<div className='swiper-container'>
							<SwiperSlide>
								<img src={Slide1} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide2} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide3} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide4} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide5} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide6} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide7} alt='CaruoselImage' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={Slide8} alt='CaruoselImage' />
							</SwiperSlide>
						</div>
						{/* <div className='on-swiper-button'>
							<ButtonComponent />
						</div> */}
					</Swiper>
				</div>
				<div className='carousel-left-Image'>
					<img src={image1} alt='CaruoselImage' className='carousel-img' />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
