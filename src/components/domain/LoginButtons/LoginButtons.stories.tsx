import { Story, Meta } from '@storybook/react';
import LoginButtons, { LoginButtonsProps } from '.';

export default {
  title: 'Components/domain/LoginButtons',
  component: LoginButtons,
} as Meta;

const Template: Story<LoginButtonsProps> = (args) => <LoginButtons {...args} />;

export const Default = Template.bind({});

Default.args = {
  providers: [
    {
      id: 'github',
      name: 'GitHub',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/github',
      callbackUrl: 'http://localhost:3000/api/auth/callback/github',
    },
    {
      id: 'naver',
      name: 'Naver',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/naver',
      callbackUrl: 'http://localhost:3000/api/auth/callback/naver',
    },
    {
      id: 'kakao',
      name: 'Kakao',
      type: 'oauth',
      signinUrl: 'http://localhost:3000/api/auth/signin/kakao',
      callbackUrl: 'http://localhost:3000/api/auth/callback/kakao',
    },
  ],
};
