import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import NavIcon from '.';

describe('NavIcon', () => {
  const renderNavIcon = (active: boolean) =>
    render(
      <ThemeProvider theme={theme}>
        <NavIcon
          active={active}
          label="네비게이션"
          targetUrl="/"
          image={<div>1</div>}
        />
      </ThemeProvider>,
    );

  describe('NavIcon on, off 여부', () => {
    it('default NavIcon', () => {
      renderNavIcon(false);

      expect(screen.getByTestId('nav-icon-wrapper')).toHaveStyle({
        color: theme.colors.brownGrey,
      });
    });

    it('active NavIcon', () => {
      renderNavIcon(true);

      expect(screen.getByTestId('nav-icon-wrapper')).toHaveStyle({
        color: theme.colors.aquaMarine,
      });
    });
  });
});
