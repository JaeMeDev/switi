import React from 'react';
import { Story, Meta } from '@storybook/react';
import NoticeList, { NoticeListProps } from '.';

export default {
  title: 'Components/domain/NoticeList',
  component: NoticeList,
} as Meta;

const Template: Story<NoticeListProps> = (args) => <NoticeList {...args} />;

export const Default = Template.bind({});

Default.args = {
  notices: [
    { title: '공지사항', date: '2022-06-03', slug: '01-notice' },
    { title: '공지사항2', date: '2022-06-04', slug: '02-notice' },
  ],
};
