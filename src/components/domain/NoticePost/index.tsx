import React from 'react';
import { PostWrapper, Title, PostHtml } from './style';

export interface NoticePostProps {
  title: string;
  post: string;
}

const NoticePost: React.FC<NoticePostProps> = ({ title, post }) => (
  <PostWrapper>
    <Title>[공지] {title}</Title>
    <PostHtml dangerouslySetInnerHTML={{ __html: post }} />
  </PostWrapper>
);

export default NoticePost;
