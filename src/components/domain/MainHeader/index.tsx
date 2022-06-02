import React from 'react';
import SeoTitle from '@components/base/SeoTitle';
import HeaderTitle from '@components/base/HeaderTitle';
import { HeaderWrapper } from './style';

export interface MainHeaderProps {
  title?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => (
  <>
    <SeoTitle title={title} />
    <HeaderWrapper>
      <HeaderTitle title={title} />
    </HeaderWrapper>
  </>
);

export default MainHeader;
