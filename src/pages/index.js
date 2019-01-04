import React from 'react';

import Layout from '../components/Layout';

import RunningCalculator from '../components/RunningCalculator';

// Extra
import '../styles/fonts.css';
import '../styles/reset.css';

const IndexPage = () => (
  <Layout>
    <RunningCalculator />
  </Layout>
);

export default IndexPage;
