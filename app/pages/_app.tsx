import React from 'react';
import OriginalApp from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Nav } from '../components/Nav';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 12px;
    font-weight: 400;
    font-family: 'YakuHanJP', 'Noto Sans JP', Sans-Serif;
    line-height: 1.5;
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default class App extends OriginalApp {
  render = () => {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </>
    );
  };
}
