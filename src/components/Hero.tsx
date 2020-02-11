import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heroImage: {
      height: '280px',
      marginBottom: theme.spacing(5),
    },
    heroTitle: {
      fontWeight: 700,
    },
    heroText: {
      textAlign: 'center',
    },
    buttons: {
      '& > *, & > *:hover': {
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        background: theme.palette.background.paper,
        margin: theme.spacing(1),
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
            <Typography component="div" variant="h4" className={classes.heroTitle}>
              楽するための努力は惜しまない
            </Typography>
            <p>
              32才の時に会計業界からWebの世界にバックエンドエンジニアとして飛び込みました。
              <br />
              バックエンドだけでなく、フロントエンドもインフラもいけちゃうフルスタックエンジニアを目指しています。
            </p>
            <div className={classes.buttons}>
              <Button variant="outlined" color="primary" href="/work">
                制作物を見る
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
