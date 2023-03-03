import React from 'react';
import './Store.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';
import image1 from '../../assets/watchs/herolarged_avenue_collection.avif';
import ButtonComponent from '../../components/shared/buttonComponent/ButtonComponent';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// importing images for the collection page
import img1 from '../../assets/creationsImage/Bangal2.jpg';
import img2 from '../../assets/creationsImage/Bangal__Custom.png';
import img3 from '../../assets/creationsImage/Bangal__Custom.png';
import img4 from '../../assets/creationsImage/Bangal3.jpg';
import img5 from '../../assets/creationsImage/Bangal4.jpg';
import img6 from '../../assets/creationsImage/EarPiece.png';
import img7 from '../../assets/creationsImage/PNeckLace.png';

const Store = () => {
	const all = [img1, img2, img3, img4, img5, img6, img7, img3];
	const bangles = [img1, img2, img3];
	const bracelet = [img4, img5, img6, img7, img3];
	const necklace = [img1, img2, img7, img3];
	const earring = [img1, img2, img3, img6, img7, img3];
	const rings = [img2, img3, img4, img5, img6, img7];

	const [currCollection, setCurrCollection] = React.useState(all);
	const [currFilter, setCurrFilter] = React.useState('all');

	React.useEffect(() => {
		console.log('comp rerender');
	}, [currCollection, currFilter]);
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
          "Indulge in the allure of timeless elegance and explore our exquisite jewellery collections at Alankar Jewellers. Each piece is crafted with precision and care, featuring intricate designs that exude sophistication and charm."
        }
        paragraph2={
          "From classic to contemporary, our collections offer a range of fascinating styles that will elevate your look for any occasion. Come discover the perfect piece to add to your collection today."
        }
        marginTop={"0px"}
      />
      <div className="filter-component-container">
        <div className="filter-container">
          <div
            className={
              "filter-item " + (currFilter === "all" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(all);
              setCurrFilter("all");
            }}
          >
            All
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "bangles" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(bangles);
              setCurrFilter("bangles");
            }}
          >
            Bangles
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "bracelets" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(bracelet);
              setCurrFilter("bracelets");
            }}
          >
            Bracelets
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "necklace" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(necklace);
              setCurrFilter("necklace");
            }}
          >
            Necklace
          </div>
          <div
            className={
              "filter-item " +
              (currFilter === "earring" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(earring);
              setCurrFilter("earring");
            }}
          >
            Earrings
          </div>
          <div
            className={
              "filter-item " + (currFilter === "rings" && "active-filter-item")
            }
            onClick={() => {
              setCurrCollection(rings);
              setCurrFilter("rings");
            }}
          >
            Rings
          </div>
        </div>
      </div>
      <div className="store-container">
        <div className="store-grid">
          {currCollection.map((item) => (
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
      <div style={{ margin: "3rem auto" }}>
        <ButtonComponent />
      </div>
    </div>
  );
};

export default Store;
