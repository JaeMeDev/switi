import React from 'react';
import PageHeader from '@components/domain/PageHeader';
import { ComponentWrapper } from '@styles/shared';

export interface PageLayoutProps {
  title: string;
  canGoBack?: boolean;
}

const PageLayout: React.FCWithChildren<PageLayoutProps> = ({
  children,
  title,
  canGoBack,
}) => (
  <>
    <PageHeader title={title} canGoBack={canGoBack} />
    <ComponentWrapper>{children}</ComponentWrapper>
  </>
);

export default PageLayout;
