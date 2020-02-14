import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Chip, IconButton } from '@material-ui/core';
import { Link as LinkIcon, GitHub as GitHubIcon } from '@material-ui/icons';

import Layout from '../components/Layout';
import ContentHero from '../components/ContentHero';
import SocialMeta from '../components/SocialMeta';

interface Work {
  title: string;
  date: string;
  src: string;
  link?: string;
  github?: string;
  skills: Array<string>;
  body: ReactElement;
}

const workItems: Array<Work> = [
  {
    title: 'hideyuk1.dev',
    date: '2020.02 - Now',
    src: '/static/images/work/hideyuk1.dev.jpg',
    github: 'https://github.com/hideyuk1-jp/hideyuk1.dev',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Material-UI',
      'AWS CodePipeline',
      'AWS S3',
      'AWS CloudFront',
    ],
    body: (
      <p>
        今いるこのポートフォリオサイト兼ブログです。
        <br />
        元々はWordPressで作成していましたが、Next.jsを使ったサーバレスの静的サイトとして作り直しました。
        <br />
        <br />
        GitHubへpushすると、自動的にAWS
        CodePipelineでビルド・デプロイされてS3にホスティングされるように設定しています。
      </p>
    ),
  },
  {
    title: 'TweetApp',
    date: '2019.05',
    src: '/static/images/work/tweet-app.jpg',
    link: 'https://hideyuk1-tweet-app.herokuapp.com/',
    github: 'https://github.com/hideyuk1-jp/tweet-app',
    skills: ['Ruby on Rails', 'Bootstrap', 'Heroku'],
    body: (
      <p>
        ProgateでRuby on Railsを学んだ直後に作成したポートフォリオ用のサンプルアプリケーションです。
        <br />
        <br />
        主な機能として以下を実装しました。
        <br />
        ・ユーザーの登録・詳細表示・編集・削除
        <br />
        ・ユーザー認証
        <br />
        ・投稿の登録・詳細表示・編集・削除
        <br />
        ・投稿へのコメントの登録・削除
        <br />
        ・投稿へのいいねの登録・削除
        <br />
        ・投稿の検索
        <br />
        <br />
        実際に動くものを作ろうと思ってHerokuにデプロイするところまで行いました。
      </p>
    ),
  },
  {
    title: 'TodoistChute',
    date: '2018.07 - Now',
    src: '/static/images/work/todoist-chute.jpg',
    link:
      'https://chrome.google.com/webstore/detail/todoistchute-finish-time/ghllkaandaghmnhgldofdmollpjlefmj',
    github: 'https://github.com/hideyuk1-jp/todoistchute',
    skills: ['Javascript', 'JQuery', 'UIkit'],
    body: (
      <p>
        Todoist用に作成したChrome拡張機能です。
        <br />
        Todoistのタスクに見積時間を設定することで、合計時間を集計して完了予定時刻を表示します。
        <br />
        <br />
        以下の機能をJQueryにより実装しました。
        <br />
        ・タスクごとの見積もり時間を集計
        <br />
        ・タスク数・タスクの合計時間を表示
        <br />
        ・日付によるタスクの絞り込み
        <br />
        ・現在時刻とタスクの合計時間から完了時刻を表示
        <br />
      </p>
    ),
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heroTitle: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
    heroText: {
      textAlign: 'center',
      '& > p': {
        color: theme.palette.text.secondary,
        margin: 0,
      },
    },
    workItem: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        '& > .sectionHeader': {
          flex: 1,
          textAlign: 'center',
          padding: `0 ${theme.spacing(2.5)}px 0 0`,
        },
        '& > .sectionBody': {
          flex: 1,
          padding: `0 0 0 ${theme.spacing(2.5)}px`,
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > .sectionHeader, & > .sectionBody': {
            padding: 0,
          },
        },
      },
      '&:nth-child(odd) > .container': {
        flexDirection: 'row-reverse',
        '& > .sectionHeader': {
          padding: `0 0 0 ${theme.spacing(2.5)}px`,
        },
        '& > .sectionBody': {
          padding: `0 ${theme.spacing(2.5)}px 0 0`,
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > .sectionHeader, & > .sectionBody': {
            padding: 0,
          },
        },
      },
      '& .image': {
        maxWidth: '100%',
        borderRadius: theme.spacing(2),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
      },
      '& .link-icons': {
        margin: `${theme.spacing(1)}px 0`,
      },
      '& .title': {
        letterSpacing: theme.spacing(0.5),
        fontWeight: 700,
      },
      '& .date': {
        color: theme.palette.text.secondary,
      },
      '& .skills > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

const WorkIndex: NextPage = () => {
  const classes = useStyles();

  const items = workItems.map(workItem => {
    return (
      <section key={workItem.title} className={classes.workItem}>
        <Container maxWidth="md" className="container">
          <div className="sectionHeader">
            <img src={workItem.src} alt={workItem.title} className="image" />
            <div style={{ textAlign: 'center' }} className="link-icons">
              <IconButton
                color="inherit"
                href={workItem.link ?? ''}
                disabled={!workItem.link}
                target="_blank"
                rel="noopener"
                aria-label="Link"
              >
                <LinkIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href={workItem.github ?? ''}
                disabled={!workItem.github}
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
            </div>
          </div>
          <div className="sectionBody">
            <Typography variant="h4" className="title">
              {workItem.title}
            </Typography>
            <p className="date">{workItem.date}</p>
            {workItem.body}
            <div className="skills">
              {workItem.skills.map(skill => {
                return (
                  <Chip key={skill} size="small" label={skill} color="primary" variant="outlined" />
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    );
  });

  return (
    <Layout title="Portfolio | hideyuk1.dev">
      <SocialMeta title="Portfolio | hideyuk1.dev" url="https://hideyuk1.dev/work" />
      <ContentHero title="Portfolio" subtitle="制作物" />
      {items}
    </Layout>
  );
};

export default WorkIndex;
