import React from 'react';
import { ButtonWrapper, IconWrapper, Text } from './style';
import useLoginItem from './useLoginItem';

export interface LoginButtonProps {
  loginType: string;
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ loginType, onClick }) => {
  const { title, svgIcon, buttonColor } = useLoginItem(loginType);

  return (
    <ButtonWrapper buttonColor={buttonColor} onClick={onClick}>
      <IconWrapper>{svgIcon}</IconWrapper>
      <Text data-testid="login_text" loginType={loginType}>{`${title}로 로그인`}</Text>
    </ButtonWrapper>
  );
};

export default LoginButton;
