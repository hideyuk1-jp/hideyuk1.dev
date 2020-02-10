import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Hidden, IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
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
        height: '100%',
        color: 'inherit',
        padding: `0 ${theme.spacing(2)}px`,
        '&:after': {
          content: '" "',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: theme.spacing(0.5),
          width: '100%',
          borderRadius: theme.spacing(0.25),
          background: theme.palette.primary.main,
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(0, 1)',
          transformOrigin: 'center top',
        },
        '&:hover': {
          textDecoration: 'none',
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
        display: 'block',
        width: '100%',
        padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
        color: 'inherit',
        '&:hover': {
          textDecoration: 'none',
          background: theme.palette.background.default,
        },
      },
      '& > $socialLinks': {
        textAlign: 'center',
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

  const links: { attributes: { href: string; target?: string; rel?: string }; text: string }[] = [
    {
      attributes: {
        href: '/about',
      },
      text: 'About',
    },
    {
      attributes: {
        href: '/portfolio',
      },
      text: 'Portfolio',
    },
    {
      attributes: {
        /* TODO: ブログ移行したら修正 */
        href: 'https://hideyuk1.com',
        target: '_blank',
        rel: 'noopener',
      },
      text: 'Blog',
    },
  ];

  const menuLinks = () => (
    <>
      {links.map(link => (
        <Link {...link.attributes} key={link.attributes.href}>
          {link.text}
        </Link>
      ))}
    </>
  );

  const socialLinks = () => (
    <div className={classes.socialLinks}>
      <Tooltip title="Twitter" arrow>
        <IconButton color="inherit" href={twitterUrl} target="_blank" rel="noopener">
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <IconButton color="inherit" href={githubUrl} target="_blank" rel="noopener">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </div>
  );

  const sideList = (side: DrawerSide) => (
    <div className={classes.drawer}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(side, false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      {menuLinks()}
      <Divider />
      <Hidden smUp>{socialLinks()}</Hidden>
    </div>
  );

  return (
    <nav className={classes.nav}>
      <Hidden smDown>{menuLinks()}</Hidden>
      <Hidden xsDown>{socialLinks()}</Hidden>
      <Hidden mdUp>
        <div>
          <IconButton color="inherit" edge="end" onClick={toggleDrawer('right', true)}>
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
