import React from 'react';
import Link from 'next/link';
import { NoticeWrapper, Title, Date } from './style';

export interface NoticeLinkProps {
  title: string;
  date: string;
  slug: string;
}

const NoticeLink: React.FC<NoticeLinkProps> = ({ title, date, slug }) => (
  <NoticeWrapper>
    <Link href={`/notice/${slug}`}>
      <a>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </a>
    </Link>
  </NoticeWrapper>
);

export default NoticeLink;
