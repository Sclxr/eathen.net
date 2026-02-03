// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/E.png" />

        {/* Basics */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f1419" />
        <meta name="color-scheme" content="dark light" />

        {/* If you have a manifest, uncomment */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
