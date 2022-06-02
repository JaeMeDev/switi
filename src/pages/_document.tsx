import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="switi" />
          <meta name="application-name" content="switi" />
          <meta name="description" content="switi application" />
          <meta
            name="theme-color"
            content="#4fd5a7"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#4fd5a7"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="apple-touch-icon" href="/images/maskable_icon_512.png" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
