import React from 'react';
import { Story, Meta } from '@storybook/react';
import NoticeLink, { NoticeLinkProps } from '.';

export default {
  title: 'Components/base/NoticeLink',
  component: NoticeLink,
} as Meta;

const Template: Story<NoticeLinkProps> = (args) => <NoticeLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '공지사항',
  date: '2022-06-03',
  slug: '01-notice',
};
