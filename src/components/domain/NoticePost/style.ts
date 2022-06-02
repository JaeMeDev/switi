import styled from '@emotion/styled';
import { getColor } from '@utils/themeUtils';

export const PostWrapper = styled.div`
  margin-top: 24px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  color: ${getColor('black')};
  margin-bottom: 20px;
`;

export const PostHtml = styled.div`
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid ${getColor('greyLine')};
`;
