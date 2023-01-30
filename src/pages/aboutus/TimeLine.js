import React from 'react';
import './About.css';
import img from '../../media/timeline-dummy-image.avif';

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-content">
        <div className="timeline-grid">
          <div className='yr-ul-container'>
            <ul className="year-list-container">
              <li className='active'>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
              <li>1999</li>
            </ul>
          </div>
          <div className="timeline-obj-container">
            <div className="timeline-obj-text-part">
              <h2 className="timeline-obj-year">1896</h2>
              <h2 className='timeline-obj-heading'>Harry Winston is born in New York City</h2>
              <p>
                The son of immigrants, Winston grows up in modest surroundings
                and is exposed from an early age to the inner workings of his
                father's small jewelry shop on the city's west side.
              </p>
            </div>
            <div className="timeline-obj-img-part">
              <img src={img} alt="dummy for alankar website" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine