import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Nav from './Nav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow: 'none',
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
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
        color: theme.palette.text.primary,
        fontSize: '32px',
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
      fontSize: '12.8px',
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
    <AppBar component="div" position="static" className={classes.navbar}>
      <Container maxWidth="md" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" className={classes.title} noWrap>
            <Tooltip title="ホーム" arrow>
              <Link href="/">
                hideyuk<span className={classes.accent}>1</span>
                <span className={classes.small}>.com</span>
              </Link>
            </Tooltip>
          </Typography>
          <Nav twitterUrl={twitterUrl} githubUrl={githubUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
