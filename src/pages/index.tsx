import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Profile from '../components/home/profile';
import SocialMeta from '../components/social-meta';

const Index: NextPage = () => {
  return (
    <Layout title="hideyuk1.dev">
      <SocialMeta title="hideyuk1.dev" url="https://hideyuk1.dev" />
      <Hero />
      <Profile />
    </Layout>
  );
};

export default Index;
