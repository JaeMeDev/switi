import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';
import { ButtonSize } from './interface';

export const ButtonWrapper = styled.button<{
  size: ButtonSize;
  disalbed?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    getColor(props.disabled ? 'gray' : 'aquaMarine')(props)};
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${getColor('white')};
`;
