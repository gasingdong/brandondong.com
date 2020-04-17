import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

interface SocialIconProps {
  url: string;
  Icon: IconType;
  download?: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = (props: SocialIconProps) => {
  const { url, Icon, download } = props;

  return (
    <a className="title__icon" href={url} download={download}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
