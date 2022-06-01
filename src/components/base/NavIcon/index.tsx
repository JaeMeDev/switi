import React from 'react';
import Link from 'next/link';
import { IconWrapper, Icon } from './style';

export interface NavIconProps {
  active: boolean;
  label: string;
  targetUrl: string;
  image: React.ReactNode;
}

const NavIcon: React.FC<NavIconProps> = ({
  active,
  label,
  targetUrl,
  image,
}) => (
  <Link href={targetUrl}>
    <IconWrapper data-testid="nav-icon-wrapper" active={active}>
      <Icon>{image}</Icon>
      <span>{label}</span>
    </IconWrapper>
  </Link>
);

export default NavIcon;
