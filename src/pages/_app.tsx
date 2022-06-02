import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import GlobalStyle from '@styles/GlobalStyles';
import theme from '@styles/theme';
import { getColor } from '@utils/themeUtils';
import defaultNextSeoConfig from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...defaultNextSeoConfig} />
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: ${getColor('white')};
`;

export default MyApp;
