import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@styles/GlobalStyles';
import theme from '@styles/theme';
import defaultNextSeoConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...defaultNextSeoConfig} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
