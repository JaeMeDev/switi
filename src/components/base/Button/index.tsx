import React, { FC, PropsWithChildren } from 'react';
import { ButtonWrapper } from './style';
import { ButtonSize } from './interface';

export interface ButtonProps {
  size?: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size = 'full',
  disabled,
  onClick,
}) => (
  <ButtonWrapper size={size} disabled={disabled} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;