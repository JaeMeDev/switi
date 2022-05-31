import { DefaultSeoProps } from 'next-seo';

const defaultTitle = 'switi';
const defaultDescription = 'switi application';
const defaultUrl = 'http://localhost:3000';

const defaultNextSeoConfig: DefaultSeoProps = {
  title: defaultTitle,
  description: defaultDescription,
  canonical: defaultUrl,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: defaultUrl,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};

export default defaultNextSeoConfig;
