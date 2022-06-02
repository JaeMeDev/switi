import React from 'react';
import { render, waitFor } from '@testing-library/react';
import SeoTitle from '.';

// eslint-disable-next-line react/display-name
jest.mock('next/head', () => ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
));

describe('SeoTitle', () => {
  const renderSeoTitle = (title?: string) => render(<SeoTitle title={title} />);

  describe('SeoTitle Test', () => {
    it('타이틀이 없을 경우', async () => {
      renderSeoTitle();

      await waitFor(() => {
        expect(document.title).toEqual('switi');
      });
    });

    it('타이틀이 있는 경우', async () => {
      renderSeoTitle('홈');

      await waitFor(() => {
        expect(document.title).toEqual('switi | 홈');
      });
    });
  });
});
