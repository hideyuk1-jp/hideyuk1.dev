import React from 'react';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import Profile from '../components/home/Profile';
import SocialMeta from '../components/SocialMeta';

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
