import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const styles = css`
  ${emotionReset}
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
