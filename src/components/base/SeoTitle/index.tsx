import React from 'react';
import Head from 'next/head';

interface SeoTitleProps {
  title?: string;
}

const SeoTitle: React.FC<SeoTitleProps> = ({ title }) => (
  <Head>
    <title>{title ? `switi | ${title}` : 'switi'}</title>
  </Head>
);

export default SeoTitle;
