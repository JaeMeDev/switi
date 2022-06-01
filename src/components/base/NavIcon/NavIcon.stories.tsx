import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import NavIcon, { NavIconProps } from '.';

export default {
  title: 'Components/base/NavIcon',
  component: NavIcon,
} as Meta;

const Template: Story<NavIconProps> = (args) => (
  <Container>
    <NavIcon {...args} />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Default = Template.bind({});

Default.args = {
  active: false,
  label: '홈',
  targetUrl: '/',
  image: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
};

export const NavIconOn = Template.bind({});

NavIconOn.args = {
  active: true,
  label: '홈',
  targetUrl: '/',
  image: (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
};
