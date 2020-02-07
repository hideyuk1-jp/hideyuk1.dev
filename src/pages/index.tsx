import React from 'react';
import { NextPage } from 'next';
import PropTypes from 'prop-types';
import Header from '../components/Header';

interface Props {
  title: string;
  description: string;
  twitterUrl: string;
  githubUrl: string;
}

const Index: NextPage<Props> = props => {
  const { title, description, twitterUrl, githubUrl } = props;

  return (
    <>
      <Header
        siteTitle={title}
        siteDescription={description}
        twitterUrl={twitterUrl}
        githubUrl={githubUrl}
      />
    </>
  );
};

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

Index.getInitialProps = async () => {
  const configData = await import(`../data/config.json`);
  return {
    ...configData,
  };
};

export default Index;
