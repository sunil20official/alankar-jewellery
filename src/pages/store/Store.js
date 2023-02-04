import React from 'react';
import './Store.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent'
import image1 from "../../assets/watchs/herolarged_avenue_collection.avif";
import ButtonComponent from '../../components/shared/buttonComponent/ButtonComponent';
import { LazyLoadImage } from "react-lazy-load-image-component";
// importing images for the collection page
import img1 from '../../assets/creationsImage/Bangal2.jpg'
import img2 from '../../assets/creationsImage/Bangal (Custom).jpg'
import img3 from '../../assets/creationsImage/Bangal.jpg'
import img4 from '../../assets/creationsImage/Bangal3.jpg'
import img5 from '../../assets/creationsImage/Bangal4.jpg'
import img6 from '../../assets/creationsImage/EarPiece.jpg'
import img7 from '../../assets/creationsImage/PNeckLace.jpg'

const Store = () => {
  const collections = [img1, img2, img3, img4, img5, img6, img7, img3];
  return (
    <div>
      <img
        className="page-top-image"
        style={{ width: "100%" }}
        src={image1}
        alt="page top"
      />
      <HeadingComponent
        heading={"Our Collection"}
        paragraph={
          "Through its collections, the House of Alankar reinterprets time in the most elegant way."
        }
        paragraph2={
          "Enter a world of pure luxury and know-how to explore our exceptional creations."
        }
        marginTop={"0px"}
      />
      <div className="store-container">
        <div className="store-grid">
          {collections.map((item) => (
            <div className="item-container">
              <LazyLoadImage
                style={{ width: "100%" }}
                src={item}
                effect="blur"
                alt="collection of pics from alankar store"
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{margin:"3rem auto"}}>
        <ButtonComponent />
      </div>
    </div>
  );
}

export default Store;