import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { Link } from '@material-ui/core';

import Layout from '../../components/Layout';
import ContentHero from '../../components/ContentHero';

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

const previewItems: Array<MDXElement> = importAll(require.context('./', true, /\.mdx$/));

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
      <Link key={meta.title} href={meta.url}>
        {meta.title}
        <img src={meta.heroImage} alt={meta.title} />
      </Link>
    );
  });

const BlogIndex: NextPage = () => {
  return (
    <>
      <Layout title="Blog | hideyuk1.dev">
        <ContentHero title="Blog" subtitle="記事" />
        {items}
      </Layout>
    </>
  );
};

export default BlogIndex;
