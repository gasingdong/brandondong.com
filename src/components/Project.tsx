import React from 'react';
import { ProjectModel } from '../utils/Models';

interface ProjectProps {
  project: ProjectModel;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const { project } = props;
  return (
    <div className="project">
      <div className="project__header">
        <h1 className="project__title">{project.title}</h1>
        <div className="project__links">
          {project.links.map(element => (
            <a key={element.name} className="project__link" href={element.link}>
              {element.name}
            </a>
          ))}
        </div>
      </div>
      <div className="project__details">
        <div className="project__role">
          <b>Role:</b> {project.role}
        </div>
        <div className="project__description">{project.description}</div>
        <div className="project__tech">
          {project.tech.map(element => (
            <a
              key={element.name}
              className="project__link--tech"
              href={element.link}
            >
              {element.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
