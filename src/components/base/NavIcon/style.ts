import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';

export const IconWrapper = styled.a<{ active: boolean }>`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  color: ${(props) =>
    getColor(props.active ? 'aquaMarine' : 'brownGrey')(props)};
  :hover {
    color: ${(props) =>
      getColor(props.active ? 'lightTeal' : 'lightGrey')(props)};
    transition: color 250ms;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
`;
