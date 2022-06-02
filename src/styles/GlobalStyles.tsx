import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const styles = css`
  ${emotionReset}
  html {
    background-color: #eee;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
