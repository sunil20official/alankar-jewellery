import React from "react";
import "./Media.css";
import HeadingComponent from "../../components/shared/headingcomponent/HeadingComponent";
// images of booklets
import Slide1 from "../../assets/model/1.jpg";
import Slide2 from "../../assets/model/2.jpg";
import Slide3 from "../../assets/model/3.jpg";
import Slide4 from "../../assets/model/4.jpg";
import Slide5 from "../../assets/model/5.jpg";
import Slide6 from "../../assets/model/6.jpg";

// importing pdf booklets 
import pdf1 from '../../assets/booklets/samplebooklet.pdf';

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

  const booklets = [
    {
      img_src: Slide1,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2016",
    },
    {
      img_src: Slide2,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2017",
    },
    {
      img_src: Slide3,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2018",
    },
    {
      img_src: Slide4,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2019",
    },
    {
      img_src: Slide5,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2020",
    },
    {
      img_src: Slide6,
      pdf_url: pdf1,
      title: "Alankar Booklet",
      year: "2022",
    },
  ];

  const onClickBooklet = (pdf) => {
    window.open(pdf)
  }

  return (
    <div>
      <HeadingComponent
        heading={"Our Booklets"}
        paragraph={
          "Explore our timeless collections with the latest Alankar booklets."
        }
        // paragraph2={""}
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
            {booklets.map((booklet) => (
              <SwiperSlide>
                <div
                  className="booklet-container"
                  onClick={() => onClickBooklet(booklet.pdf_url)}
                >
                  <img
                    className="booklet-img"
                    src={booklet.img_src}
                    alt="alankar booklet"
                  />
                  <p className="booklet-title">{booklet.title}</p>
                  <p className="booklet-year">{booklet.year}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Media;
