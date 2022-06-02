import { ThemeProvider } from '@emotion/react';
import { fireEvent } from '@storybook/testing-library';
import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import BackButton from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('BackButton', () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockImplementation(() => ({
      back: mockBack,
    }));
  });

  const renderHeaderTitle = (canGoBack: boolean) =>
    render(
      <ThemeProvider theme={theme}>
        <BackButton canGoBack={canGoBack} />
      </ThemeProvider>,
    );

  describe('canGoBack 여부에 따른 출력', () => {
    it('canGoBack true', () => {
      renderHeaderTitle(true);

      expect(screen.getByTestId('back_button')).toBeInTheDocument();
    });

    it('canGoBack false', () => {
      renderHeaderTitle(false);

      expect(screen.getByTestId('empty')).toBeEmptyDOMElement();
    });

    it('canGoBack event', () => {
      renderHeaderTitle(true);

      fireEvent.click(screen.getByTestId('back_button'));

      expect(mockBack).toBeCalledTimes(1);
    });
  });
});
