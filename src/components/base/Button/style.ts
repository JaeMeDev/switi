import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { getColor } from '@utils/themeUtils';
import { ButtonType } from './interface';

export const ButtonWrapper = styled.button<{
  buttonType: ButtonType;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 28px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) =>
    getColor(props.disabled ? 'grey' : 'aquaMarine')(props)};
  color: ${getColor('white')};
  ${(props) =>
    props.buttonType === 'CLOSE' &&
    css`
      background-color: ${getColor('lightGrey')(props)};
      color: ${getColor('brownGrey')(props)};
    `}
  ${(props) =>
    props.buttonType === 'SMALL' &&
    css`
      width: 62px;
      height: 28px;
      border-radius: 14px;
    `}
`;
