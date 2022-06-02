import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import HeaderTitle from '.';

describe('HeaderTitle', () => {
  const renderHeaderTitle = (title?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <HeaderTitle title={title} />
      </ThemeProvider>,
    );

  describe('텍스트 여부에 따른 Title Test', () => {
    it('텍스트가 없을 경우', () => {
      renderHeaderTitle();

      expect(screen.getByTestId('header_title_image')).toBeInTheDocument();
    });

    it('텍스트가 있을 경우', () => {
      renderHeaderTitle('마이페이지');

      expect(screen.getByText('마이페이지')).toBeInTheDocument();
    });
  });
});
