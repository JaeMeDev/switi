import React from 'react';
import Header from '@components/domain/Header';
import Footer from '@components/domain/Footer';
import { ComponentWrapper } from '@styles/shared';

export interface MainLayoutProps {
  title?: string;
}

const MainLayout: React.FCWithChildren<MainLayoutProps> = ({
  children,
  title,
}) => (
  <>
    <Header title={title} />
    <ComponentWrapper>{children}</ComponentWrapper>
    <Footer />
  </>
);

export default MainLayout;
