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
        <h2 className="project__title">{project.title}</h2>
        <div className="buttons">
          {project.links.map(element => (
            <a key={element.name} className="button" href={element.link}>
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
        <div className="buttons">
          {project.tech.map(element => (
            <a
              key={element.name}
              className="button button--secondary"
              href={element.link}
            >
              {element.name}
            </a>
          ))}
        </div>
        <div className="project__thumbnail">
          <img src={`/images/${project.thumbnail}`} alt="project thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default Project;
