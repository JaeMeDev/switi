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

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  children: 'OK',
  onClick: action('click'),
  disabled: false,
  type: 'NORMAL',
};

export const CloseButton = Template.bind({});

CloseButton.args = {
  children: 'CLOSE',
  onClick: action('click'),
  disabled: false,
  type: 'CLOSE',
};

export const SmallButton = Template.bind({});

SmallButton.args = {
  children: 'Small',
  onClick: action('click'),
  disabled: false,
  type: 'SMALL',
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  children: 'Disabled',
  onClick: action('click'),
  disabled: true,
};
