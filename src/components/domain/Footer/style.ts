import { getColor } from '@utils/themeUtils';
import styled from '@emotion/styled';

export const Navigation = styled.nav`
  background-color: ${getColor('white')};
  border-top: 1px solid ${getColor('veryLightPink')};
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 5px;
`;
