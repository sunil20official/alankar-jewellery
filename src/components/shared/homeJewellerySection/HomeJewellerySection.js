import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from 'react-router-dom';
import './HomeJewellerySection.css';

const HomeJewellerySection = ({ img_src, img_float, heading, paragraph, link }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div
          className='jewellery-container'
        >
          <div className="left-section-container">
            <LazyLoadImage
              className='img-float-right'
              src={img_src}
              alt="jewellery section for home page"
            />
          </div>
          <div className="right-section-container">
            <h4>{heading}</h4>
            <p>{paragraph}</p>
            <button
              onClick={() => navigate(`${link}`)}
              className="home-discover-more-btn"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeJewellerySection;