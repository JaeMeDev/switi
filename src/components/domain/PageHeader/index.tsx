import React from 'react';
import SeoTitle from '@components/base/SeoTitle';
import BackButton from '@components/base/BackButton';
import { EmptyButton } from '@styles/shared';
import { HeaderWrapper, Title } from './style';

export interface PageHeaderProps {
  title: string;
  canGoBack?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  canGoBack = false,
}) => (
  <>
    <SeoTitle title={title} />
    <HeaderWrapper>
      <BackButton canGoBack={canGoBack} />
      <Title>{title}</Title>
      <EmptyButton />
    </HeaderWrapper>
  </>
);

export default PageHeader;
