import theme from '@styles/theme';
import { getColor } from './themeUtils';

describe('themeUtils test', () => {
  it('get aquaMarine color', () => {
    const color = getColor('aquaMarine')({ theme });
    expect(color).toBe('#4fd5a7');
  });
});
