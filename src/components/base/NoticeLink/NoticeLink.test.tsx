import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import NoticeLink from '.';

describe('NoticeLink', () => {
  it('출력 테스트', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NoticeLink title="공지사항1" date="2022.06.03" slug="01-notice" />
      </ThemeProvider>,
    );

    expect(container).toHaveTextContent('공지사항1');
    expect(container).toHaveTextContent('2022.06.03');
  });
});
