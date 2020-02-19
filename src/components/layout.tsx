import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Head from 'next/head';
import { motion } from 'framer-motion';

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
        <main className={classes.main}>
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: 100,
              opacity: 0,
            }}
            exit={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.1,
            }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Layout;
