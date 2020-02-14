import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Layout from '../Layout';
import SocialMeta from '../SocialMeta';

const withPost = (meta: any) => ({ children }: { children: any }) => {
  const date = meta.date ? new Date(meta.date) : new Date();

  return (
    <>
      <Layout title={`Blog - ${meta.title} | hideyuk1.dev`}>
        <SocialMeta
          title={`Blog - ${meta.title} | hideyuk1.dev`}
          url={`https://hideyuk1.dev${meta.url}`}
          image={`${meta.heroImage}`}
        />
        <Container maxWidth="md">
          <h1 className="title fw6 f0">{meta.title}</h1>
          {meta.type && <span className="post-type mute fw7">{meta.type}</span>}
          <div className="date mute f6">
            <p>{meta.date}</p>
          </div>
          <p>{meta.category}</p>
          <main>{children}</main>
        </Container>
      </Layout>
    </>
  );
};

export default withPost;
