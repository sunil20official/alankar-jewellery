import React from 'react';
import HeadingComponent from '../../components/shared/headingcomponent/HeadingComponent';
import './About.css';

const About = () => {
  return (
    <>
      <HeadingComponent heading={'The History of Alankar'}
        paragraph={'A timeline of the key moments and milestones that make up the House incredible legacy.'}
        marginTop={'50px'}
      />
    </>
  )
}

export default About