import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      '& > *': {
        display: 'flex',
        flexDilection: 'row',
      },
    },
    sectionHeader: {
      flex: 1,
    },
    sectionTitle: {
      fontWeight: 700,
    },
    sectionBody: {
      flex: 1,
    },
    profileTitle: {
      fontWeight: 700,
      fontSize: '1.6rem',
    },
    profileJob: {
      marginBottom: theme.spacing(2),
    },
    profileDesc: {
      marginBottom: theme.spacing(2),
    },
    profile: {
      '& > dl': {
        '& > dt': {
          fontWeight: 700,
        },
      },
    },
  }),
);

const Profile: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="md" className={classes.profile}>
          <div className={classes.sectionHeader}>
            <Typography variant="h4" className={classes.sectionTitle}>
              About me
            </Typography>
          </div>
          <div className={classes.sectionBody}>
            <div className={classes.profileTitle}>Hideyuki Hashimoto</div>
            <div className={classes.profileJob}>Web Developer</div>
            <p className={classes.profileDesc}>
              32才の時に会計業界からWebの世界にバックエンドエンジニアとして飛び込みました。
              バックエンドだけでなく、フロントエンドもインフラもいけちゃうフルスタックエンジニアを目指しています。
            </p>
            <dl>
              <dt>誕生年 / 年齢</dt>
              <dd>1986年 / 33才</dd>
            </dl>
            <dl>
              <dt>技術スタック</dt>
              <dd>Laravel / React / Next.js / AWS</dd>
            </dl>
            <dl>
              <dt>資格</dt>
              <dd>
                <ul>
                  <li>AWS認定SysOpsアドミニストレーター - アソシエイト（2020-01）</li>
                  <li>AWS認定デベロッパー - アソシエイト（2019-12）</li>
                  <li>AWS認定ソリューションアーキテクト - アソシエイト（2019-10）</li>
                  <li>Python3エンジニア認定データ分析試験（2019−09）</li>
                  <li>AWS認定クラウドプラクティショナー（2019−07）</li>
                  <li>Python3エンジニア認定基礎試験（2019-03）</li>
                  <li>日商簿記2級（2019-03）</li>
                  <li>Excel VBA Standard（2019-01）</li>
                  <li>ほめ達検定3級、2級（2018−12）</li>
                  <li>Microsoft Office Specialist 2013 Master（2017-12）</li>
                  <li>応用情報技術者（2014-12）</li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>趣味</dt>
              <dd>映画鑑賞、カラオケ、酒、競プロ、絵</dd>
            </dl>
          </div>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="md" className={classes.profile}>
          <div className={classes.sectionHeader}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Career
            </Typography>
          </div>
          <div className={classes.sectionBody}>
            <div>Hideyuki Hashimoto</div>
            <div>Web Developer</div>
            <div>誕生年 / 年齢</div>
            <div>1986年 / 33歳</div>
            <div>資格</div>
            <div>AWS SAA</div>
            <div>趣味</div>
            <div>映画鑑賞、カラオケ、酒、競プロ、絵</div>
          </div>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="md" className={classes.profile}>
          <div className={classes.sectionHeader}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Skills
            </Typography>
          </div>
          <div className={classes.sectionBody}>
            <div>Hideyuki Hashimoto</div>
            <div>Web Developer</div>
            <div>誕生年 / 年齢</div>
            <div>1986年 / 33歳</div>
            <div>資格</div>
            <div>AWS SAA</div>
            <div>趣味</div>
            <div>映画鑑賞、カラオケ、酒、競プロ、絵</div>
          </div>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="md" className={classes.profile}>
          <div className={classes.sectionHeader}>
            <Typography variant="h4" className={classes.sectionTitle}>
              Qualifications
            </Typography>
          </div>
          <div className={classes.sectionBody}>
            <ul>
              <li>AWS認定SysOpsアドミニストレーター - アソシエイト</li>
              <li>AWS認定デベロッパー - アソシエイト</li>
              <li>AWS認定ソリューションアーキテクト - アソシエイト</li>
              <li>Python3エンジニア認定データ分析試験</li>
              <li>AWS認定クラウドプラクティショナー</li>
              <li>Python3エンジニア認定基礎試験</li>
              <li>日商簿記2級</li>
              <li>Excel VBA Standard</li>
              <li>ほめ達検定3級、2級</li>
              <li>Microsoft Office Specialist 2013 Master</li>
              <li>応用情報技術者</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Profile;
