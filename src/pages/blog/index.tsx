import React from 'react';
import { NextPage } from 'next';

import Layout from '../../components/Layout';
import ContentHero from '../../components/ContentHero';

const Index: NextPage = () => {
  return (
    <Layout title="Blog | hideyuk1.com">
      <ContentHero title="Blog" subtitle="記事" />
    </Layout>
  );
};

export default Index;
