import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import NaverProvider from 'next-auth/providers/naver';
import KakoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import client from '@libs/server/client';

export default NextAuth({
  adapter: PrismaAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || '',
      clientSecret: process.env.NAVER_CLIENT_SECRET || '',
    }),
    KakoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
  ],
});
