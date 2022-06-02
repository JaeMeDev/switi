import { Story, Meta } from '@storybook/react';
import PageHeader, { PageHeaderProps } from '.';

export default {
  title: 'Components/domain/PageHeader',
  component: PageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '설정',
};

export const CanGoBackHeader = Template.bind({});

CanGoBackHeader.args = {
  title: '마이페이지',
  canGoBack: true,
};
