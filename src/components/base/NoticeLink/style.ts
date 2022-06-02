import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';

export const NoticeWrapper = styled.div`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid ${getColor('greyLine')};
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  color: ${getColor('black')};
  margin-bottom: 4px;
`;

export const Date = styled.span`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  color: ${getColor('brownGrey')};
`;
