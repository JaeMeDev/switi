import { NextPage } from 'next';
import filter from 'lodash/fp/filter';
import { getProviders, getSession, ClientSafeProvider } from 'next-auth/react';
import PageLayout from '@components/layout/PageLayout';
import LoginButtons from '@components/domain/LoginButtons';

interface SignInProps {
  providers: ClientSafeProvider[];
}

const SignIn: NextPage<SignInProps> = ({ providers }) => (
  <PageLayout title="로그인" canGoBack>
    <LoginButtons providers={providers} />
  </PageLayout>
);

export const getServerSideProps = async () => {
  const session = await getSession();

  if (session) {
    return { redirect: { permanent: false, destination: '/' } };
  }

  const providers = await getProviders();

  return {
    props: {
      providers: filter(
        (provider: ClientSafeProvider) => provider.type !== 'credentials',
      )(providers),
    },
  };
};

export default SignIn;
