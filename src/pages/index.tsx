import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Index: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Index;
