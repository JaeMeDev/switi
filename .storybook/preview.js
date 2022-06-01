import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12mini',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  layout: 'fullscreen'
};

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
));
