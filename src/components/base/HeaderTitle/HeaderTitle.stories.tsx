import React, { WithChildren } from 'react';
import { Story, Meta } from '@storybook/react';
import HeaderTitle, { HeaderTitleProps } from '.';

export default {
  title: 'Components/base/HeaderTitle',
  component: HeaderTitle,
} as Meta;

const Template: Story<WithChildren<HeaderTitleProps>> = (args) => (
  <HeaderTitle {...args} />
);

export const NoTitle = Template.bind({});

export const HaveTitle = Template.bind({});

HaveTitle.args = {
  title: '마이페이지',
};
