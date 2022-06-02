import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  background-color: ${getColor('white')};
  width: 100%;
  max-width: 720px;
  height: 48px;
  padding: 0 24px;
  border-bottom: 1px solid ${getColor('veryLightPink')};
`;
