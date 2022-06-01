import { Story, Meta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Components/domain/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.story = {
  parameters: {
    nextRouter: {
      pathname: '/search',
    },
  },
};
