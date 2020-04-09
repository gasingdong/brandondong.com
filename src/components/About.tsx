import React from 'react';
import Intro from './Intro';
import Skills from './Skills';

const About: React.FC = () => {
  return (
    <div className="about">
      <Intro />
      <Skills />
    </div>
  );
};

export default About;
