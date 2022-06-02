import React from 'react';
import SeoTitle from '@components/base/SeoTitle';
import HeaderTitle from '@components/base/HeaderTitle';
import { HeaderWrapper } from './style';

export interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    <SeoTitle title={title} />
    <HeaderWrapper>
      <HeaderTitle title={title} />
    </HeaderWrapper>
  </>
);

export default Header;
