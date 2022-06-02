import React from 'react';
import { Story, Meta } from '@storybook/react';
import NoticePost, { NoticePostProps } from '.';

export default {
  title: 'Components/domain/NoticePost',
  component: NoticePost,
} as Meta;

const Template: Story<NoticePostProps> = (args) => <NoticePost {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '공지사항입니다.',
  post: '<div><p>첫번째 공지사항입니다.</p></div>',
};
