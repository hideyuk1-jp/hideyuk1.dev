import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import dataformat from 'dateformat';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

import components from './post-components';
import Layout from '../layout';
import SocialMeta from '../social-meta';
import BlogHero from './blog-hero';
import SocialShare from './social-share';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singlePost: {
      '& .hero-image': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(15)}px 0 ${theme.spacing(4)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& main': {},
    },
  }),
);

interface Meta {
  title: string;
  heroImage: string;
  url: string;
  category: string;
  tag: string[];
  date: string;
}

const withPost = (meta: Meta) => ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  const date = dataformat(meta.date ? new Date(meta.date) : new Date(), 'yyyy.mm.dd HH:MM');

  return (
    <Layout title={`Blog - ${meta.title} | hideyuk1.dev`} siteTitleComponent="h3">
      <SocialMeta
        title={`Blog - ${meta.title} | hideyuk1.dev`}
        url={`https://hideyuk1.dev${meta.url}`}
        image={`${meta.heroImage}`}
      />
      <BlogHero
        title={meta.title}
        date={date}
        titleComponent="h1"
        category={meta.category}
        tag={meta.tag}
      />
      <section className={classes.singlePost}>
        <Container maxWidth="sm">
          <img src={meta.heroImage} alt="main" className="hero-image" />
          <MDXProvider components={components}>
            <main className="markdown-body">{children}</main>
          </MDXProvider>
        </Container>
      </section>
      <section>
        <Container maxWidth="sm">
          <SocialShare
            title={`${meta.title} | hideyuk1.dev`}
            url={`https://hideyuk1.dev${meta.url}`}
          />
          <NextLink href="/blog" passHref>
            <Button variant="contained" color="primary">
              ← 一覧へ戻る
            </Button>
          </NextLink>
        </Container>
      </section>
    </Layout>
  );
};

export default withPost;
