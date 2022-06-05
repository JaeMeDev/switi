import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';
import { LoginType } from '@models/login';

export const ButtonWrapper = styled.div<{ buttonColor: string }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ buttonColor }) => buttonColor};
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
`;

export const Text = styled.p<{ loginType: LoginType }>`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    getColor(props.loginType === 'naver' ? 'white' : 'black')(props)};
`;
