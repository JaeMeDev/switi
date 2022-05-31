import React, { FCWithChildren } from 'react';
import { ButtonWrapper } from './style';
import { ButtonType } from './interface';

export interface ButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FCWithChildren<ButtonProps> = ({
  children,
  type = 'NORMAL',
  disabled,
  onClick,
}) => (
  <ButtonWrapper buttonType={type} disabled={disabled} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;
