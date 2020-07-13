import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

interface SocialIconProps {
  url: string;
  Icon: IconType;
  download?: boolean;
  name: string;
}

const SocialIcon: React.FC<SocialIconProps> = (props: SocialIconProps) => {
  const { url, Icon, download, name } = props;

  return (
    <a aria-label={name} href={url} download={download}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
