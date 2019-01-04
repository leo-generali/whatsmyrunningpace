import React from 'react';
import SEO from '../SEO';

const Layout = ({ children }) => (
  <main>
    <SEO />
    {children}
  </main>
);

export default Layout;
