import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heroImage: {
      height: '280px',
      marginBottom: theme.spacing(5),
    },
    heroText: {
      textAlign: 'center',
      '& > h3:first-child': {
        fontWeight: 700,
      },
    },
    chips: {
      marginBottom: theme.spacing(5),
      '& > *': {
        margin: `0 ${theme.spacing(0.5)}px`,
      },
    },
    buttons: {
      '& > *, & > *:hover': {
        boxShadow: 'none',
        margin: theme.spacing(1),
      },
      '& > *:first-child': {
        color: '#fff',
      },
    },
  }),
);

const Hero: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      {/* Hero */}
      <section>
        <Container maxWidth="md" className={classes.hero}>
          <img src="/static/images/app_development.png" alt="hero" className={classes.heroImage} />
          {/*
            Copyright 2019 Sergei Tikhonov
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the «Software»), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            THE SOFTWARE IS PROVIDED «AS IS», WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          */}

          <div className={classes.heroText}>
            <Typography variant="h3">Hi, I&apos;m a Web Developer!</Typography>
            <p>
              1986年生まれ。32才の時に会計業界からWebの世界にバックエンドエンジニアとして飛び込みました。
              <br />
              今後はバックエンドだけでなく、フロントもインフラもいけちゃうフルスタックエンジニアを目指しています。
            </p>
            <div className={classes.chips}>
              <Chip size="small" label="Laravel" />
              <Chip size="small" label="React" />
              <Chip size="small" label="Next.js" />
              <Chip size="small" label="AWS" />
            </div>
            <div className={classes.buttons}>
              <Button variant="contained" color="primary" href="/about">
                もっと詳しく
              </Button>
              <Button variant="outlined" color="primary" href="/contact">
                メッセージを送る
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
