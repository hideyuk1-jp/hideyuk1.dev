import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';
import { Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

import Header from './header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
        '&:nth-child(even)': {
          background: theme.palette.background.paper,
        },
      },
    },
  }),
);

interface Props {
  title?: string;
  description?: string;
  twitterUrl?: string;
  githubUrl?: string;
  siteTitleComponent?: React.ElementType;
}

const Layout: React.FunctionComponent<Props> = ({
  title = 'hideyuk1.dev',
  description = '',
  twitterUrl = 'https://twitter.com/hideyuk1_jp',
  githubUrl = 'https://github.com/hideyuk1-jp',
  siteTitleComponent = 'h1',
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <Header
          siteTitle={title}
          siteDescription={description}
          twitterUrl={twitterUrl}
          githubUrl={githubUrl}
          siteTitleComponent={siteTitleComponent}
        />
        <Reveal animation={Animation.FadeIn}>
          <main className={classes.main}>{children}</main>
        </Reveal>
      </div>
    </>
  );
};

export default Layout;
