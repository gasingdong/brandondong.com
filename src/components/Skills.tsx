import React from 'react';
import { TechModel } from '../utils/Models';

const Skills: React.FC = () => {
  return (
    <div className="skills" id="skills">
      <h1>Tech Stack</h1>
      <div className="buttons">
        {TechModel.VALUES.map(element => (
          <a
            key={element.value.name}
            className="button button--secondary"
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
