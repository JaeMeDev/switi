import { Theme } from '@emotion/react';
import { ThemeColors } from '@styles/theme';

interface ThemeProps {
  theme: Theme;
}

type GetThemeInfo<T> = (key: T) => (prop: ThemeProps) => string;

export const getColor: GetThemeInfo<keyof ThemeColors> =
  (key) =>
  ({ theme }): string =>
    theme.colors[key];
