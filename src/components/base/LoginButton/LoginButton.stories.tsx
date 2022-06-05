import React from 'react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginButton, { LoginButtonProps } from '.';

export default {
  title: 'Components/base/LoginButton',
  component: LoginButton,
} as Meta;

const Template: Story<LoginButtonProps> = (args) => (
  <Container>
    <LoginButton {...args} />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const NaverButton = Template.bind({});

NaverButton.args = {
  loginType: 'naver',
  onClick: action('네이버 로그인'),
};

export const KakaoButton = Template.bind({});

KakaoButton.args = {
  loginType: 'kakao',
  onClick: action('카카오 로그인'),
};

export const GithubButton = Template.bind({});

GithubButton.args = {
  loginType: 'github',
  onClick: action('깃허브 로그인'),
};
