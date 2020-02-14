import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > .sectionHeader': {
            paddingBottom: theme.spacing(4),
          },
        },
        '& > .sectionHeader': {
          flex: 1,
          '& > .sectionTitle': {
            fontWeight: 700,
            letterSpacing: theme.spacing(0.5),
          },
        },
        '& > .sectionBody': {
          flex: 2,
        },
      },
    },
    profile: {
      background: theme.palette.background.paper,
      marginTop: theme.spacing(2),
      padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
      borderRadius: theme.spacing(1),
      boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
      '& > .header': {
        display: 'inline-block',
        color: '#eaeaea',
        background: theme.palette.primary.main,
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(4)}px`,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0,0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        '& > .title': {
          paddingBottom: theme.spacing(0.5),
          fontWeight: 700,
          fontSize: '1.6rem',
          lineHeight: 1.0,
        },
        '& > .job': {
          lineHeight: 1.0,
        },
      },
      '& > .body > dl': {
        margin: `0 0 ${theme.spacing(2)}px`,
        '& > dt': {
          color: theme.palette.text.secondary,
        },
        '& > dd': {
          paddingTop: theme.spacing(0.5),
        },
      },
      '& .ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'table',
        '& > li': {
          display: 'table-row',
          '&:after': {
            content: '""',
            display: 'block',
          },
          '&:before': {
            content: '"-"',
            display: 'table-cell',
            paddingRight: '0.4em',
          },
        },
      },
    },
    timeline: {
      position: 'relative',
      padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(4)}px`,
      '& .entry': {
        position: 'relative',
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          position: 'absolute',
          top: theme.spacing(0.25),
          left: `-${theme.spacing(4)}px`,
          height: theme.spacing(2),
          width: theme.spacing(2),
          background: theme.palette.primary.main,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0,0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
          borderRadius: '50%',
          zIndex: 2,
        },
      },
      '& p': {
        margin: `0`,
      },
      '& .during': {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(0.5),
      },
      '& .title': {
        fontWeight: 700,
        marginBottom: theme.spacing(2),
      },
      '& .body': {
        background: theme.palette.background.paper,
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: theme.spacing(0.75),
        height: '100%',
        width: theme.spacing(0.5),
        background: '#eaeaea',
        borderRadius: theme.spacing(0.25),
        zIndex: 1,
      },
    },
  }),
);

const Profile: React.FunctionComponent = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    birthYear: 0,
    Age: 0,
  });

  React.useEffect(() => {
    const birth = new Date('1986-10-08');
    const today = new Date();

    const getAge = (b: Date, t: Date) => {
      const bb = b.getFullYear() * 10000 + (b.getMonth() + 1) * 100 + b.getDate();
      const tt = t.getFullYear() * 10000 + (t.getMonth() + 1) * 100 + t.getDate();
      return Math.floor((tt - bb) / 10000);
    };
    setState({ birthYear: birth.getFullYear(), Age: getAge(birth, today) });
    // console.log('calc!');
  }, []);

  return (
    <>
      <section className={classes.section}>
        <Container maxWidth="md" className="container">
          <div className="sectionHeader">
            <Typography variant="h4" className="sectionTitle">
              About me
            </Typography>
          </div>
          <div className="sectionBody">
            <div className={classes.profile}>
              <div className="header">
                <div className="title">Hideyuki Hashimoto</div>
                <div className="job">Web Developer & Designer</div>
              </div>
              <div className="body">
                <dl>
                  <dt>誕生年 / 年齢</dt>
                  <dd>
                    {state.birthYear} / {state.Age}
                  </dd>
                </dl>
                <dl>
                  <dt>技術スタック</dt>
                  <dd>
                    <ul className="ul">
                      <li>PHP / Laravel</li>
                      <li>React / TypeScript / Next.js</li>
                      <li>AWS</li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>資格・認定</dt>
                  <dd>
                    <ul className="ul">
                      <li>AWS認定SysOpsアドミニストレーター - アソシエイト（2020.01）</li>
                      <li>AWS認定デベロッパー - アソシエイト（2019.12）</li>
                      <li>AWS認定ソリューションアーキテクト - アソシエイト（2019.10）</li>
                      <li>Python3エンジニア認定データ分析試験（2019.09）</li>
                      <li>AWS認定クラウドプラクティショナー（2019.07）</li>
                      <li>Python3エンジニア認定基礎試験（2019.03）</li>
                      <li>日商簿記2級（2019.03）</li>
                      <li>Excel VBA Standard（2019.01）</li>
                      <li>ほめ達検定3級、2級（2018.12）</li>
                      <li>Microsoft Office Specialist 2013 Master（2017.12）</li>
                      <li>応用情報技術者（2014.12）</li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>趣味</dt>
                  <dd>映画鑑賞、カラオケ、酒、競プロ、絵</dd>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="md" className="container">
          <div className="sectionHeader">
            <Typography variant="h4" className="sectionTitle">
              Career
            </Typography>
          </div>
          <div className="sectionBody">
            <div className={classes.timeline}>
              <div className="entry">
                <div className="header">
                  <p className="during">2019.09 - 2019.12</p>
                  <p className="title">Web系受託開発ベンチャー / Web Developer</p>
                </div>
                <div className="body">
                  <p>
                    前職の会計事務所でのITを活用した業務効率化の経験にやりがいを感じ、ITで生きていくことを決意し転職しました。
                    <br />
                    PHP/Laravelを採用したプラットフォーム開発にバックエンドエンジニアとして従事した他、新規案件のAWSアーキテクチャ設計やQA（テスト）業務を経験しました。
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="header">
                  <p className="during">2016.01 - 2019.08</p>
                  <p className="title">会計事務所 / 税理士補助</p>
                </div>
                <div className="body">
                  <p>
                    仕訳のコンピュータ入力から、決算・税務申告、各種届出等の手続きの他、クライアントへの試算表の説明、財務上・税務上の相談対応を行いました。
                    <br />
                    また通常業務と並行して業務フローの整理、効率化、ITツール導入、マニュアルの作成、エクセルVBAを用いた業務の自動化など業務効率化を中心となって推進しました。
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="header">
                  <p className="during">2012.09</p>
                  <p className="title">大阪大学 情報システム工学科目 中退</p>
                </div>
                <div className="body">
                  <p>
                    4年次まで進級しCSの基礎などを学びましたが、自身で立ち上げたサークルの活動や商売ばかりやっていたら卒業できませんでした。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Profile;
