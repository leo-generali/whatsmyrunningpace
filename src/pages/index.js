import React from 'react';
import './reset.css';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RunningCalculator from '../components/RunningCalculator';

const IndexPage = () => (
  <Layout>
    <SEO />
    <RunningCalculator />
  </Layout>
);

export default IndexPage;
