import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Hidden, IconButton } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      gridArea: 'nav',
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      '& > *': {
        display: 'flex',
        alignItems: 'center',
      },
      '& > a': {
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
        height: '100%',
        color: 'inherit',
        padding: `0 ${theme.spacing(2)}px`,
        fontWeight: 700,
        '&:after': {
          content: '" "',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: theme.spacing(0.5),
          width: '100%',
          background: theme.palette.primary.main,
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(0, 1)',
          transformOrigin: 'center top',
        },
        '&:hover, &.selected': {
          textDecoration: 'none',
          color: theme.palette.primary.main,
          '&:after': {
            transform: 'scale(1, 1)',
          },
        },
      },
    },
    accent: {
      color: theme.palette.primary.main,
    },
    small: {
      fontSize: '12.8px',
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
      boxShadow: 'none',
      '& > a': {
        position: 'relative',
        display: 'block',
        width: '100%',
        padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
        color: 'inherit',
        fontWeight: 700,
        '&:after': {
          content: '" "',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '100%',
          width: theme.spacing(0.5),
          background: theme.palette.primary.main,
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(1, 0)',
          transformOrigin: 'left center',
        },
        '&:hover, &.selected': {
          textDecoration: 'none',
          color: theme.palette.primary.main,
          '&:after': {
            transform: 'scale(1, 1)',
          },
        },
      },
      '& > $socialLinks': {
        textAlign: 'center',
        padding: theme.spacing(2),
      },
    },
    socialLinks: {},
  }),
);

interface Props {
  twitterUrl: string;
  githubUrl: string;
}

const Nav: React.FunctionComponent<Props> = props => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const { twitterUrl, githubUrl } = props;

  const { pathname, route } = useRouter();

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

  const menuLinks = (
    <>
      <NextLink href="/" passHref>
        <MuiLink
          className={clsx({
            selected: pathname === '/',
          })}
        >
          About
        </MuiLink>
      </NextLink>

      <NextLink href="/work" passHref>
        <MuiLink
          className={clsx({
            selected: route.startsWith('/work'),
          })}
        >
          Portfolio
        </MuiLink>
      </NextLink>

      <NextLink href="/blog" passHref>
        <MuiLink
          className={clsx({
            selected: route.startsWith('/blog'),
          })}
        >
          Blog
        </MuiLink>
      </NextLink>

      <NextLink href="/contact" passHref>
        <MuiLink
          className={clsx({
            selected: route.startsWith('/contact'),
          })}
        >
          Contact
        </MuiLink>
      </NextLink>
    </>
  );

  const socialLinks = (
    <div className={classes.socialLinks}>
      <Tooltip title="Twitter" arrow>
        <IconButton
          color="inherit"
          href={twitterUrl}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <IconButton
          color="inherit"
          href={githubUrl}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </div>
  );

  const sideList = (side: DrawerSide) => (
    <div className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(side, false)} aria-label="Menu Close">
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      {menuLinks}
      <Divider />
      <Hidden smUp>{socialLinks}</Hidden>
    </div>
  );

  return (
    <nav className={classes.nav}>
      <Hidden smDown>{menuLinks}</Hidden>
      <Hidden xsDown>{socialLinks}</Hidden>
      <Hidden mdUp>
        <div>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer('right', true)}
            aria-label="Menu Open"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
