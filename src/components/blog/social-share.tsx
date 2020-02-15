import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Twitter as TwitterIcon, Facebook as FacebookIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialShare: {
      margin: `-${theme.spacing(15)}px 0 ${theme.spacing(5)}px`,
      background: theme.palette.background.paper,
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 7px 10px -5px rgba(75, 192, 200, 0.4)',
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2),
      textAlign: 'center',
      '& .share-text': {
        fontSize: '1rem',
        marginBottom: theme.spacing(2),
      },
      '& .share-btn:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
      '& .twitter': {
        background: '#55acee',
        color: theme.palette.common.white,
      },
      '& .facebook': {
        background: '#3b5999',
        color: theme.palette.common.white,
      },
    },
  }),
);

interface Props {
  title: string;
  url: string;
}

const SocialShare: React.FunctionComponent<Props> = ({ title, url }) => {
  const classes = useStyles();

  return (
    <div className={classes.socialShare}>
      <div className="share-text">この記事をシェアしよう!!</div>
      <div className="share-btns">
        <IconButton
          color="primary"
          href={`https://twitter.com/share?url=${url}&text=${encodeURIComponent(
            title,
          )}&via=hideyuk1_jp`}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
          className="share-btn twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href={`https://www.facebook.com/share.php?u=${url}`}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          className="share-btn facebook"
        >
          <FacebookIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialShare;
