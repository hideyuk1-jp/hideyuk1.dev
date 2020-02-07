import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none',
      background: '#fff',
      color: '#454545',
      borderBottom: '1px solid #eaeaea',
    },
    container: {},
    toolbar: {
      padding: '0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
    },
    flexGrow: {
      flexGrow: 1,
    },
    title: {
      color: '#454545',
      fontSize: '32px',
      fontWeight: 700,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    accent: {
      color: '#4bc0c8',
    },
    small: {
      fontSize: '12.8px',
    },
    signOutButton: {
      marginLeft: theme.spacing(1),
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    drawer: {
      width: '250px',
    },
    list: {
      padding: 0,
      '& > a': {
        color: 'inherit',
      },
    },
  }),
);

interface Props {
  siteTitle: string;
  siteDescription: string;
  twitterUrl: string;
  githubUrl: string;
}

export default function Header(props: Props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const { twitterUrl, githubUrl } = props;

  type DrawerSide = 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side: DrawerSide) => (
    <div className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(side, false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button component={Link} href="/about">
          <ListItemText primary="About" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} href="/portfolio">
          <ListItemText primary="portfolio" />
        </ListItem>
        <Divider />
        {/* TODO: ブログもこちらに移行したら修正 */}
        <ListItem
          button
          component={Link}
          href="https://hideyuk1.com"
          target="_blank"
          rel="noopener"
        >
          <ListItemText primary="Blog" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <AppBar className={classes.root}>
        <Container maxWidth="md" className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" noWrap>
              <Tooltip title="HOME">
                <Link className={classes.title} href="/">
                  hideyuk<span className={classes.accent}>1</span>
                  <span className={classes.small}>.com</span>
                </Link>
              </Tooltip>
            </Typography>
            <div className={classes.flexGrow} />
            <div>
              <Hidden smDown>
                <Button href="/about">About</Button>
                <Button href="/portfolio">PortFolio</Button>
                <Button href="https://hideyuk1.com" target="_blank" rel="noopener">
                  Blog
                </Button>
              </Hidden>
              <Tooltip title="Twitter">
                <IconButton color="inherit" href={twitterUrl} target="_blank" rel="noopener">
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton color="inherit" href={githubUrl} target="_blank" rel="noopener">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Hidden mdUp>
                <IconButton color="inherit" edge="end" onClick={toggleDrawer('right', true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                  {sideList('right')}
                </Drawer>
              </Hidden>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
