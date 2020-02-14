import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import dateformat from 'dateformat';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import { Container, Typography, Chip } from '@material-ui/core';

import Layout from '../components/Layout';
import ContentHero from '../components/ContentHero';
import SocialMeta from '../components/SocialMeta';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postList: {
      '& > .container': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
        '& > .cat': {
          position: 'absolute',
          top: theme.spacing(2),
          left: theme.spacing(4),
        },
      },
      '& .post': {
        display: 'block',
        paddingTop: theme.spacing(2),
        color: theme.palette.text.primary,
        height: '100%',
        '&:nth-child(even)': {
          background: theme.palette.background.paper,
        },
        '&:hover': {
          textDecoration: 'none',
        },
      },
      '& .wrapper': {
        background: theme.palette.background.paper,
        padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
        height: '100%',
      },
      '& .thum': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& .title': {
        marginBottom: theme.spacing(0.5),
      },
      '& .date': {
        color: theme.palette.text.secondary,
      },
    },
  }),
);

interface Meta {
  title: string;
  date: string;
  category: string;
  url: string;
  heroImage: string;
}
interface MDXElement extends __WebpackModuleApi.RequireContext {
  meta: Meta;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function importAll(r: any): Array<MDXElement> {
  return r.keys().map(r);
}

const previewItems: Array<MDXElement> = importAll(require.context('./blog', false, /\.mdx$/));

function dateSortDesc(a: MDXElement, b: MDXElement) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const items: Array<ReactElement> = previewItems
  .sort(dateSortDesc)
  .map(({ meta }: { meta: Meta }) => {
    return (
      <article key={meta.url}>
        <NextLink href={meta.url} passHref>
          <MuiLink className="post">
            <div className="wrapper">
              <img src={meta.heroImage} alt={meta.title} className="thum" />
              <div className="text">
                <Typography variant="h5" className="title">
                  {meta.title}
                </Typography>
                <div className="date">{dateformat(meta.date, 'yyyy.mm.dd')}</div>
              </div>
            </div>
          </MuiLink>
        </NextLink>
        <Chip className="cat" size="small" label={meta.category} color="secondary" />
      </article>
    );
  });

const BlogIndex: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <Layout title="Blog | hideyuk1.dev">
        <SocialMeta title="Blog | hideyuk1.dev" url="https://hideyuk1.dev/blog" />
        <ContentHero title="Blog" subtitle="記事" />
        <section className={classes.postList}>
          <Container maxWidth="md" className="container">
            {items}
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndex;
