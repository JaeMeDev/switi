import { Story, Meta } from '@storybook/react';
import MainLayout, { MainLayoutProps } from '.';

export default {
  title: 'Components/layout/MainLayout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const HaveTitleLayout= Template.bind({});

HaveTitleLayout.args = {
  title: '마이페이지',
};
