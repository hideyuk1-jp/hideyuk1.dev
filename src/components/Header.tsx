import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Nav from './Nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)',
      background: '#454545',
      color: '#eaeaea',
      '& a': {
        color: '#eaeaea',
      },
    },
    container: {},
    toolbar: {
      padding: '0',
      display: 'grid',
      gridTemplate: '"title . nav" auto / auto 1fr auto',
    },
    title: {
      gridArea: 'title',
      '& > a': {
        fontSize: '28px',
        fontWeight: 700,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    accent: {
      color: theme.palette.primary.main,
    },
    small: {
      fontSize: '0.4em',
    },
  }),
);

interface Props {
  siteTitle: string;
  siteDescription: string;
  twitterUrl: string;
  githubUrl: string;
}

const Header: React.FunctionComponent<Props> = props => {
  const classes = useStyles();

  const { twitterUrl, githubUrl } = props;

  return (
    <AppBar position="sticky" className={classes.navbar}>
      <Container maxWidth="md" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" className={classes.title} noWrap>
            <Link href="/">
              hideyuk<span className={classes.accent}>1</span>
              <span className={classes.small}>.dev</span>
            </Link>
          </Typography>
          <Nav twitterUrl={twitterUrl} githubUrl={githubUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
