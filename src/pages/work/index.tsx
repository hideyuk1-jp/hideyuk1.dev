import React from 'react';
import { NextPage } from 'next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import Profile from '../../components/Profile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heroTitle: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
    heroText: {
      textAlign: 'center',
      '& > p': {
        color: '#999',
        margin: 0,
      },
    },
  }),
);

const Index: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout title="Portfolio | hideyuk1.com">
      {/* Hero */}
      <section>
        <Container maxWidth="md" className={classes.hero}>
          <div className={classes.heroText}>
            <Typography component="div" variant="h4" className={classes.heroTitle}>
              Portfolio
            </Typography>
            <p>制作物</p>
          </div>
        </Container>
      </section>
      {/* End Hero */}
      <Profile />
    </Layout>
  );
};

export default Index;
