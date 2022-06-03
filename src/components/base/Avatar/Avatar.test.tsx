import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import Avatar from '.';

describe('Avatar', () => {
  const renderAvatar = (avatarUrl?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <Avatar avatarUrl={avatarUrl} />
      </ThemeProvider>,
    );

  describe('avatarUrl 에 따른 이미지', () => {
    it('avatarUrl이 없을 경우', async () => {
      renderAvatar();

      const avatar = screen.getByRole('img');
      await waitFor(() =>
        expect(avatar).toHaveAttribute(
          'src',
          '/assets/images/default_avatar.svg',
        ),
      );
    });

    it('avatarUrl이 있을 경우', async () => {
      renderAvatar('/assets/images/main_logo.svg');

      const avatar = screen.getByRole('img');
      await waitFor(() =>
        expect(avatar).toHaveAttribute('src', '/assets/images/main_logo.svg'),
      );
    });
  });
});
