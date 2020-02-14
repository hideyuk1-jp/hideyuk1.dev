import React from 'react';
import { NextPage } from 'next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import ContentHero from '../components/ContentHero';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& > section': {
        padding: `${theme.spacing(10)}px 0`,
        '&:nth-child(even)': {
          background: theme.palette.background.paper,
        },
      },
    },
  }),
);

const ContactIndex: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout title="Contact | hideyuk1.dev">
      <ContentHero title="Contact" subtitle="お問い合わせ" />
    </Layout>
  );
};

export default ContactIndex;
