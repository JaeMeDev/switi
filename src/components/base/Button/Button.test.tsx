import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import Button, { ButtonProps } from '.';

describe('Button', () => {
  const renderButton = ({ onClick, size, disabled }: ButtonProps) =>
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick} size={size} disabled={disabled}>
          버튼
        </Button>
      </ThemeProvider>,
    );

  describe('Button Props Test', () => {
    it('일반 버튼', () => {
      renderButton({ onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        backgroundColor: '#4fd5a7',
      });
    });

    it('Disabled 버튼', () => {
      renderButton({ disabled: true, onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        backgroundColor: '#dcdcdc',
      });
    });
  });
});
