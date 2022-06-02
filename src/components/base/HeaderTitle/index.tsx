import React from 'react';
import Image from 'next/image';
import { Title } from './style';

export interface HeaderTitleProps {
  title?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  if (title) {
    return <Title>{title}</Title>;
  }

  return (
    <Image
      width="54.7px"
      height="18px"
      src="/assets/images/main_logo.svg"
      alt="main logo"
      data-testid="header_title_image"
    />
  );
};

export default HeaderTitle;
