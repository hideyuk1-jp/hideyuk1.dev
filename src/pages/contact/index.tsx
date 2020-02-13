import React from 'react';
import { NextPage } from 'next';

import Layout from '../../components/Layout';
import ContentHero from '../../components/ContentHero';

const Index: NextPage = () => {
  return (
    <Layout title="Contact | hideyuk1.dev">
      <ContentHero title="Contact" subtitle="お問い合わせ" />
    </Layout>
  );
};

export default Index;
