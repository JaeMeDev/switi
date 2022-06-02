import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from '.';

export default {
  title: 'Components/domain/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const HaveTitleHeader = Template.bind({});

HaveTitleHeader.args = {
  title: '마이페이지',
};
