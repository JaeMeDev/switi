import React from 'react';
import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from '.';

export default {
  title: 'Components/base/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  avatarUrl: '/assets/images/main_logo.svg',
};

export const NoAvatar = Template.bind({});
