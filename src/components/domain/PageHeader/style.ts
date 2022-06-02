import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  color: ${getColor('black')};
`;

export const EmptyBox = styled.div`
  width: 18px;
  height: 18px;
`;
