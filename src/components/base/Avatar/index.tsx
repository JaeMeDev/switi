import React from 'react';
import { AvatarImage } from './style';

export interface AvatarProps {
  avatarUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  avatarUrl = '/assets/images/default_avatar.svg',
}) => (
  <AvatarImage
    src={avatarUrl}
    width="50px"
    height="50px"
    alt="avatar image"
  />
);

export default Avatar;
