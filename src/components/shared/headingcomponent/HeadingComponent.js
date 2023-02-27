import React from 'react';
import './HeadingComponent.css';

const HeadingComponent = ({ heading, paragraph, marginTop, paragraph2, paragraph3 }) => {
	return (
		<div style={{ marginTop: `${marginTop}` }} className='heading-comp-container'>
			<div className='heading-comp-content'>
				<h1 className='heading-comp-h1'>{heading}</h1>
				<hr className='heading-comp-line'></hr>
				<p className='heading-comp-p'>{paragraph}</p>
				<p className='heading-comp-p'>{paragraph2}</p>
				<p className='heading-comp-p'>{paragraph3}</p>
			</div>
		</div>
	);
};

export default HeadingComponent;
