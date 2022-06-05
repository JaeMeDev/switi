import { renderHook } from '@testing-library/react';
import { useTheme } from '@emotion/react';
import useLoginItem from './useLoginItem';

jest.mock('@emotion/react', () => ({
  useTheme: jest.fn(),
}));

describe('useLoginItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useTheme as jest.Mock).mockImplementation(() => ({
      colors: {
        veryLightPink: '#e3e3e3',
        green: '#40a436',
        yellow: '#ffdf00',
      },
    }));
  });

  describe('login type 에 따른 결과 값', () => {
    it('naver', () => {
      const { result } = renderHook(() => useLoginItem('naver'));

      expect(result.current.title).toBe('네이버');
      expect(result.current.buttonColor).toBe('#40a436');
    });

    it('kakao', () => {
      const { result } = renderHook(() => useLoginItem('kakao'));

      expect(result.current.title).toBe('카카오');
      expect(result.current.buttonColor).toBe('#ffdf00');
    });

    it('github', () => {
      const { result } = renderHook(() => useLoginItem('github'));

      expect(result.current.title).toBe('깃허브');
      expect(result.current.buttonColor).toBe('#e3e3e3');
    });
  });
});
