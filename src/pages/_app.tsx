/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ReactGenieAnimations } from 'react-genie-styled-components';

import theme from '../components/theme';
import '../styles/markdown.css';
import '../styles/atom-one-dark.css';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ReactGenieAnimations />
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </>
    );
  }
}
