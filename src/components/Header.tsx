import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import Photo from '../assets/avatar.jpg';

const contacts = [
  {
    url: 'https://github.com/gasingdong/',
    icon: FaGithub,
  },
  {
    url: 'https://www.linkedin.com/in/brandon-dong-b8771315a/',
    icon: FaLinkedin,
  },
  {
    url: 'https://twitter.com/gasingdong',
    icon: FaTwitter,
  },
  {
    url: 'mailto:contact@brandondong.com',
    icon: FaEnvelope,
  },
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="avatar" src={Photo} alt="headshot" />
      <div className="title">
        <h1 className="title__name">BRANDON DONG</h1>
        <h2 className="title__role">FULL-STACK WEB DEVELOPER</h2>
        <div className="title__icons">
          {contacts.map(contact => (
            <SocialIcon
              key={contact.url}
              url={contact.url}
              Icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
