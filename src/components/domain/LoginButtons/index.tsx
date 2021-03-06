import React from 'react';
import _ from 'lodash/fp';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import LoginButton from '@components/base/LoginButton';
import { ButtonsWrapper } from './style';

export interface LoginButtonsProps {
  providers: ClientSafeProvider[];
}

const LoginButtons: React.FC<LoginButtonsProps> = ({ providers }) => {
  const handleProvierSignIn = (provider: ClientSafeProvider) => {
    signIn(provider.id);
  };

  return (
    <ButtonsWrapper>
      {_.map<ClientSafeProvider, React.ReactNode>((provider) => (
        <LoginButton
          key={provider.id}
          loginType={provider.id}
          onClick={() => handleProvierSignIn(provider)}
        />
      ))(providers)}
    </ButtonsWrapper>
  );
};

export default LoginButtons;
