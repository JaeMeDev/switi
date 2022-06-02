import React from 'react';
import { useRouter } from 'next/router';
import { EmptyButton } from '@styles/shared';
import { Button } from './style';

export interface BackButtonProps {
  canGoBack: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ canGoBack }) => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  if (!canGoBack) {
    return <EmptyButton data-testid="empty"/>;
  }

  return (
    <Button data-testid="back_button" onClick={onClick}>
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Button>
  );
};

export default BackButton;
