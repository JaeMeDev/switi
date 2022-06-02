import * as NextImage from 'next/image';
import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyles';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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
  layout: 'fullscreen',
};

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
));
