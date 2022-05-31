import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import theme from '@styles/theme';
import Button, { ButtonProps } from '.';

describe('Button', () => {
  const renderButton = ({ onClick, disabled, type }: ButtonProps) =>
    render(
      <ThemeProvider theme={theme}>
        <Button type={type} onClick={onClick} disabled={disabled}>
          버튼
        </Button>
      </ThemeProvider>,
    );

  describe('Button Props Test', () => {
    it('일반 버튼', () => {
      renderButton({ onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        backgroundColor: theme.colors.aquaMarine,
      });
    });

    it('Disabled 버튼', () => {
      renderButton({ disabled: true, onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        backgroundColor: theme.colors.grey,
      });
    });

    it('Close 버튼', () => {
      renderButton({ type: 'CLOSE', disabled: true, onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        backgroundColor: theme.colors.lightGrey,
        color: theme.colors.brownGrey,
      });
    });

    it('Small 버튼', () => {
      renderButton({ type: 'SMALL', disabled: true, onClick: () => null });

      expect(screen.getByText('버튼')).toHaveStyle({
        width: '62px',
        height: '28px',
      });
    });
  });
});
