import React from 'react';
import Project from './Project';
import Projects from '../utils/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects">
      {Object.values(Projects).map(element => (
        <Project key={element.title} project={element} />
      ))}
    </div>
  );
};

export default ProjectsPage;
