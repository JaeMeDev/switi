import React, { WithChildren } from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/base/Button',
  component: Button,
} as Meta;

const Template: Story<WithChildren<ButtonProps>> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Primary = Template.bind({});

Primary.args = {
  children: 'text',
  onClick: action('click'),
  disabled: false,
};
