import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import LoginButton, { LoginButtonProps } from '.';

describe('LoginButton', () => {
  const renderButton = ({ onClick, loginType }: LoginButtonProps) =>
    render(
      <ThemeProvider theme={theme}>
        <LoginButton loginType={loginType} onClick={onClick} />
      </ThemeProvider>,
    );

  describe('Button Props Test', () => {
    it('Naver 버튼', () => {
      renderButton({ loginType: 'naver', onClick: () => null });

      expect(screen.getByTestId('login_text')).toHaveTextContent(
        '네이버로 로그인',
      );
      expect(screen.getByTestId('login_text')).toHaveStyle({
        color: theme.colors.white,
      });
    });

    it('Kakao 버튼', () => {
      renderButton({ loginType: 'kakao', onClick: () => null });

      expect(screen.getByTestId('login_text')).toHaveTextContent(
        '카카오로 로그인',
      );
      expect(screen.getByTestId('login_text')).toHaveStyle({
        color: theme.colors.black,
      });
    });

    it('Github 버튼', () => {
      renderButton({ loginType: 'github', onClick: () => null });

      expect(screen.getByTestId('login_text')).toHaveTextContent(
        '깃허브로 로그인',
      );
      expect(screen.getByTestId('login_text')).toHaveStyle({
        color: theme.colors.black,
      });
    });
  });
});
