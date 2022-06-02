import React from 'react';
import MainHeader from '@components/domain/MainHeader';
import Footer from '@components/domain/Footer';
import { ComponentWrapper } from './style';

export interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FCWithChildren<MainLayoutProps> = ({
  children,
  title,
}) => (
  <>
    <MainHeader title={title} />
    <ComponentWrapper>{children}</ComponentWrapper>
    <Footer />
  </>
);

export default MainLayout;
