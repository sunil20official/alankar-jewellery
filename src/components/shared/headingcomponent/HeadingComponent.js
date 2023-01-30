import React from 'react';
import './HeadingComponent.css';

const HeadingComponent = ({heading , paragraph , marginTop}) => {

  return (
    <div style={{ marginTop: `${marginTop}` }} className="heading-comp-container">
      <div className="heading-comp-content">
        <h1 className="heading-comp-h1">{ heading }</h1>
        <hr className="heading-comp-line"></hr>
        <p className="heading-comp-p">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default HeadingComponent