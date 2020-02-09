import React from 'react';
import Head from 'next/head';
import Header from './Header';

interface Props {
  title?: string;
  description?: string;
  twitterUrl?: string;
  githubUrl?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  title = 'hideyuk1.com',
  description = '',
  twitterUrl = 'https://twitter.com/hideyuk1_jp',
  githubUrl = 'https://github.com/hideyuk1-jp',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <div className="wrapper">
        <Header
          siteTitle={title}
          siteDescription={description}
          twitterUrl={twitterUrl}
          githubUrl={githubUrl}
        />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
