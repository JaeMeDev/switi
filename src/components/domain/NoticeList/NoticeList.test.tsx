import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import NoticeList, { NoticeListProps } from '.';

describe('NoticeList', () => {
  const renderNoticeList = ({ notices }: NoticeListProps) =>
    render(
      <ThemeProvider theme={theme}>
        <NoticeList notices={notices} />
      </ThemeProvider>,
    );

  describe('notices 여부에 따른 출력', () => {
    it('notices가 없을 경우', () => {
      renderNoticeList({
        notices: [],
      });

      expect(screen.getByText('현재 공지사항이 없습니다.')).toBeInTheDocument();
    });

    it('notices가 있을 경우', () => {
      renderNoticeList({
        notices: [{ title: '공지사항', slug: '123', date: '1234' }],
      });

      expect(screen.getByText('공지사항')).toBeInTheDocument();
    });
  });
});
