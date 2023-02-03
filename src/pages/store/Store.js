import React from 'react';
import './Store.css';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent'
import image1 from "../../assets/watchs/herolarged_avenue_collection.avif";

const Store = () => {
  return (
    <div>
      <img
        className='page-top-image'
        style={{width:"100%"}}
        src={image1} alt='page top'
      />
      <HeadingComponent
        heading={"Our Store"}
        paragraph={
          "Through its collections, the House of Alankar reinterprets time in the most elegant way."
        }
        paragraph2={
          "Enter a world of pure luxury and know-how to explore our exceptional creations."
        }
        marginTop={"0px"}
      />
      <div className='store-container'>
        <div className='store-grid'>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
          <div className='item-container'></div>
        </div>
      </div>
    </div>
  );
}

export default Store;