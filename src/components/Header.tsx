import React from 'react';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFileDownload,
} from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import Photo from '../assets/avatar.jpg';

const contacts = [
  {
    name: 'github',
    url: 'https://github.com/gasingdong/',
    icon: FaGithub,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/brandon-dong-b8771315a/',
    icon: FaLinkedin,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/gasingdong',
    icon: FaTwitter,
  },
  {
    name: 'email',
    url: 'mailto:contact@brandondong.com',
    icon: FaEnvelope,
  },
  {
    name: 'resume',
    url: '/files/BrandonDongResume.pdf',
    icon: FaFileDownload,
    download: true,
  },
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="avatar" src={Photo} alt="headshot" />
      <div className="name">BRANDON DONG</div>
      <div className="title">FULL-STACK WEB DEVELOPER</div>
      <nav className="nav">
        <ul>
          <li>
            <Link activeClass="active" to="about" spy smooth duration={500}>
              <button type="button">ABOUT</button>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy smooth duration={500}>
              <button type="button">TECH</button>
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy smooth duration={500}>
              <button type="button">PROJECTS</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="socialicons">
        {contacts.map(contact => (
          <SocialIcon
            key={contact.url}
            url={contact.url}
            Icon={contact.icon}
            download={contact.download}
            name={contact.name}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
