import { Story, Meta } from '@storybook/react';
import MainHeader, { MainHeaderProps } from '.';

export default {
  title: 'Components/domain/MainHeader',
  component: MainHeader,
} as Meta;

const Template: Story<MainHeaderProps> = (args) => <MainHeader {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const HaveTitleHeader = Template.bind({});

HaveTitleHeader.args = {
  title: '마이페이지',
};
