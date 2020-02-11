import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Profile from '../../components/Profile';

const Index: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Profile />
    </Layout>
  );
};

export default Index;
