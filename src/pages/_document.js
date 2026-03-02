// src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

const GA_ID = "G-ZJS9K9T97S";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/E.png" />

        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f1419" />
        <meta name="color-scheme" content="dark light" />

        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}