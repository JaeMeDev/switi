import styled from '@emotion/styled';
import Image from 'next/image';
import {getColor} from "@utils/themeUtils";

export const AvatarImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${getColor("brownGrey")};
`;
