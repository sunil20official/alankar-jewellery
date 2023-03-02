import React from 'react';
import './HomeJewellerySection.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const HomeJewellerySectionReverse = (
  {img_src,
  heading,
  paragraph,
  link}
) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="jewellery-container-rev">
          <div className="left-section-container" data-aos="fade-up">
            <LazyLoadImage
              className="img-float-left"
              src={img_src}
              alt="jewellery section for home page"
            />
          </div>
          <div className="right-section-container" data-aos="fade-up">
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
};

export default HomeJewellerySectionReverse