import React, { WithChildren } from 'react';
import { Story, Meta } from '@storybook/react';
import BackButton, { BackButtonProps } from '.';

export default {
  title: 'Components/base/BackButton',
  component: BackButton,
} as Meta;

const Template: Story<WithChildren<BackButtonProps>> = (args) => (
  <BackButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  canGoBack: true,
};
