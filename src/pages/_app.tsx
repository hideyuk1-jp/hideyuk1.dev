/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <style jsx global>{`
            @font-face {
              font-family: 'M PLUS Rounded 1c';
              src: url('/static/fonts/MPLUSRounded1c-Regular.ttf') format('truetype');
              font-weight: 400;
              font-style: normal;
            }
            @font-face {
              font-family: 'M PLUS Rounded 1c';
              src: url('/static/fonts/MPLUSRounded1c-Medium.ttf') format('truetype');
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: 'M PLUS Rounded 1c';
              src: url('/static/fonts/MPLUSRounded1c-Bold.ttf') format('truetype');
              font-weight: 700;
              font-style: normal;
            }
          `}</style>
        </ThemeProvider>
      </>
    );
  }
}
