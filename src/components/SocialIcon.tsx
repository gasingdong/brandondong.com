import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

interface SocialIconProps {
  url: string;
  Icon: IconType;
}

const SocialIcon: React.FC<SocialIconProps> = (props: SocialIconProps) => {
  const { url, Icon } = props;

  return (
    <a className="title__icon" href={url}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
