import React from 'react';
import { useRouter } from 'next/router';
import NavIcon from '@components/base/NavIcon';
import { navigationData } from './data';
import { Navigation } from './style';

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <Navigation>
      {navigationData.map(({ label, targetUrl, image }) => (
        <NavIcon
          key={label}
          active={router.pathname === targetUrl}
          label={label}
          targetUrl={targetUrl}
          image={image}
        />
      ))}
    </Navigation>
  );
};

export default Footer;
