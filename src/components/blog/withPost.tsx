import React, { ReactElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import dataformat from 'dateformat';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import components from './post-components';
import Layout from '../Layout';
import SocialMeta from '../SocialMeta';
import ContentHero from '../ContentHero';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singlePost: {
      '& .hero-image': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(15)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& main': {
        '& h5': {},
      },
    },
  }),
);

interface Meta {
  title: string;
  heroImage: string;
  url: string;
  category: string;
  date: string;
}

const withPost = (meta: Meta) => ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  const date = meta.date ? new Date(meta.date) : new Date();

  console.log(children);

  return (
    <Layout title={`Blog - ${meta.title} | hideyuk1.dev`}>
      <SocialMeta
        title={`Blog - ${meta.title} | hideyuk1.dev`}
        url={`https://hideyuk1.dev${meta.url}`}
        image={`${meta.heroImage}`}
      />
      <ContentHero title={meta.title} subtitle={dataformat(date, 'yyyy.mm.dd HH:MM:ss')} />
      <section className={classes.singlePost}>
        <Container maxWidth="sm">
          <img src={meta.heroImage} alt="main" className="hero-image" />
          <p>{meta.category}</p>
          <MDXProvider components={components}>
            <main className="markdown-body">{children}</main>
          </MDXProvider>
        </Container>
      </section>
    </Layout>
  );
};

export default withPost;
