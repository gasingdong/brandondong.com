import React from 'react';
import { TechModel } from '../utils/Models';

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__buttons">
        {TechModel.VALUES.map(element => (
          <a
            key={element.value.name}
            className="project__link--tech"
            href={element.value.link}
          >
            {element.value.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
