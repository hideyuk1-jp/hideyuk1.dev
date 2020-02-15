import React from 'react';
import { NextPage } from 'next';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Button, Link as MuiLink, Typography } from '@material-ui/core';

import Layout from '../components/layout';
import ContentHero from '../components/content-hero';
import SocialMeta from '../components/social-meta';

const mail = 'hello.hideyuk1.dev@gmail.com';
const twitterUrl = 'https://twitter.com/hideyuk1_jp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contact: {
      '& .text': {
        fontSize: 'inherit',
      },
      '& .mail-btn': {
        marginTop: theme.spacing(5),
        textAlign: 'center',
      },
    },
  }),
);

const ContactIndex: NextPage = () => {
  const classes = useStyles();

  return (
    <Layout title="Contact | hideyuk1.dev">
      <SocialMeta title="Contact | hideyuk1.dev" url="https://hideyuk1.dev/contact" />
      <ContentHero title="Contact" subtitle="お問い合わせ" />
      <section className={classes.contact}>
        <Container maxWidth="xs">
          <Typography className="text">
            お問い合わせやお仕事のご依頼がありましたら、
            <MuiLink href={twitterUrl} target="_blank" rel="noopener" aria-label="Twitter">
              Twitter
            </MuiLink>
            からダイレクトメッセージを送っていただくか下記のメールアドレスまでご連絡ください。
          </Typography>
          <div className="mail-btn">
            <Button component="a" href={`mailto:${mail}`} variant="contained" color="primary">
              {mail}
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactIndex;
