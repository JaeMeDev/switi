import React from 'react';
import NoticeLink from '@components/base/NoticeLink';
import { NoticeItem } from '@models/notice';
import { ListWrapper, NoNotice } from './style';

export interface NoticeListProps {
  notices: NoticeItem[];
}

const NoticeList: React.FC<NoticeListProps> = ({ notices }) => (
  <ListWrapper>
    {notices.length !== 0 ? (
      notices.map(({ title, date, slug }) => (
        <NoticeLink key={title} title={title} date={date} slug={slug} />
      ))
    ) : (
      <NoNotice>현재 공지사항이 없습니다.</NoNotice>
    )}
  </ListWrapper>
);

export default NoticeList;
