import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { AnimatedTitle } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

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
  }),
);

interface Props {
  title: string;
  subtitle: string;
  titleComponent?: React.ElementType;
}

const ContentHero: React.FunctionComponent<Props> = ({
  title,
  subtitle,
  titleComponent = 'h2',
}) => {
  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md" className={classes.hero}>
        <div className={classes.heroText}>
          <Typography component={titleComponent} variant="h1" className={classes.heroTitle}>
            <AnimatedTitle animation={Animation.FadeInUp} delay={50}>
              {title.split('').join(' ')}
            </AnimatedTitle>
          </Typography>
          <p>{subtitle}</p>
        </div>
      </Container>
    </section>
  );
};

export default ContentHero;
