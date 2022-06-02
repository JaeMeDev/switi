import { Story, Meta } from '@storybook/react';
import PageLayout, { PageLayoutProps } from '.';

export default {
  title: 'Components/layout/PageLayout',
  component: PageLayout,
} as Meta;

const Template: Story<PageLayoutProps> = (args) => <PageLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '공지사항',
};

export const CanGoBackLayout = Template.bind({});

CanGoBackLayout.args = {
  title: '공지사항',
  canGoBack: true,
};
