import React from "react";
import "./Media.css";
import HeadingComponent from "../../components/shared/headingcomponent/HeadingComponent";
import Slide1 from "../../assets/model/1.jpg";
import Slide2 from "../../assets/model/2.jpg";
import Slide3 from "../../assets/model/3.jpg";
import Slide4 from "../../assets/model/4.jpg";
import Slide5 from "../../assets/model/5.jpg";
import Slide6 from "../../assets/model/6.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { Pagination } from "swiper";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + "</span>";
  },
};

const Media = () => {
  return (
    <div>
      <HeadingComponent
        heading={"Our Booklets"}
        paragraph={""}
        paragraph2={""}
        marginTop={"0px"}
      />
      <div className="media-page-container">
        <div>
          <Swiper
            // spaceBetween={50}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide1}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2022</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide2}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2021</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide3}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2020</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide1}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2022</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide4}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2021</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="booklet-container">
                <img
                  className="booklet-img"
                  src={Slide5}
                  alt="alankar booklet"
                />
                <p className="booklet-title">Alankar booklet 2022</p>
                <p className="booklet-year">2020</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Media;
