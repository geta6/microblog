import React from 'react';
import OriginalDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Document extends OriginalDocument {
  static getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    try {
      const rp = ctx.renderPage;
      ctx.renderPage = () => rp({ enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) });
      const initialProps = await OriginalDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  };

  render = () => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.png" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/yakuhanjp@3.2.0/dist/css/yakuhanjp.min.css" />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap&subset=japanese"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
