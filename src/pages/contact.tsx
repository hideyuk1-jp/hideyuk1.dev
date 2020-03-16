import React, { useState } from 'react';
import { NextPage } from 'next';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Link as MuiLink,
  Typography,
  TextField,
  TextareaAutosize,
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import Layout from '../components/layout';
import ContentHero from '../components/content-hero';
import SocialMeta from '../components/social-meta';

const sendEmailAPI = 'https://jh2fism3l6.execute-api.ap-northeast-1.amazonaws.com/v1/send';
const twitterUrl = 'https://twitter.com/hideyuk1_jp';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
      '& .contact-form': {
        marginTop: theme.spacing(5),
        fontSize: 'inherit',
        '& > *': {
          marginBottom: theme.spacing(2),
        },
        '& .submit-btn': {
          display: 'flex',
          alignItems: 'center',
          '& > .icon, & > .icon-text': {
            marginLeft: theme.spacing(1),
          },
          '& > .icon-text': {
            fontSize: 'inherit',
          },
        },
      },
    },
  }),
);

const ContactIndex: NextPage = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    name: {
      error: false,
      message: '',
    },
    email: {
      error: false,
      message: '',
    },
    body: {
      error: false,
      message: '',
    },
  });
  const [openAlert, setOpenAlert] = useState(false);

  const validate = (targetName?: string) => {
    const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
    const param: any = {
      name: {
        error: name === '',
        message: '名前を入力してください',
      },
      email: {
        error: email === '' || !email.match(pattern),
        message: 'メールアドレスを入力してください',
      },
      body: {
        error: body === '',
        message: '内容を入力してください',
      },
    };

    let overrides: any = {};
    if (targetName) {
      overrides[targetName] = param[targetName];
    } else {
      overrides = param;
    }

    setError({
      ...error,
      ...overrides,
    });
    return !(name === '' || email === '' || !email.match(pattern) || body === '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading || success) return;

    if (!validate()) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(sendEmailAPI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        body,
      }),
    })
      .then(res => {
        if (res.status === 400) {
          throw new Error('Bad request');
        }
        if (res.status === 200) {
          setLoading(false);
          setSuccess(true);
          setOpenAlert(true);
        } else {
          throw new Error('Bad response');
        }
      })
      .catch(() => {
        setLoading(false);
        setOpenAlert(true);
        // this.setState({ loading: false, errorMessage: true });
      });
  };
  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

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
            からダイレクトメッセージを送っていただくか、下のフォームからお問い合わせください。
          </Typography>
          <form className="contact-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <TextField
                error={error.name.error}
                helperText={error.name.error && error.name.message}
                name="name"
                type="text"
                label="名前"
                variant="outlined"
                fullWidth
                onChange={e => setName(e.target.value)}
                onBlur={e => validate(e.target.name)}
              />
            </div>
            <div>
              <TextField
                error={error.email.error}
                helperText={error.email.error && error.email.message}
                name="email"
                type="email"
                label="メールアドレス"
                variant="outlined"
                fullWidth
                onChange={e => setEmail(e.target.value)}
                onBlur={e => validate(e.target.name)}
              />
            </div>
            <div>
              <TextField
                error={error.body.error}
                helperText={error.body.error && error.body.message}
                name="body"
                label="内容"
                multiline
                InputProps={{
                  inputComponent: TextareaAutosize,
                  rows: 8,
                }}
                variant="outlined"
                fullWidth
                onChange={e => setBody(e.target.value)}
                onBlur={e => validate(e.target.name)}
              />
            </div>
            <div className="submit-btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading || success}
              >
                送信
              </Button>
              <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                {success ? (
                  <Alert onClose={handleCloseAlert} severity="success">
                    送信が完了しました！
                  </Alert>
                ) : (
                  <Alert onClose={handleCloseAlert} severity="error">
                    送信に失敗しました。時間を置いて再度送信してみてください。
                  </Alert>
                )}
              </Snackbar>
            </div>
          </form>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactIndex;
