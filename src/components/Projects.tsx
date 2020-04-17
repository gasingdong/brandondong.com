import React from 'react';
import Project from './Project';
import ProjectsList from '../utils/ProjectsList';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h1>I&apos;ve worked on...</h1>
      {Object.values(ProjectsList).map(element => (
        <Project key={element.title} project={element} />
      ))}
    </div>
  );
};

export default Projects;
