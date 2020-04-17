import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';

const Content: React.FC = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Content;
