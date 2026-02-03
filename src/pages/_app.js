// src/pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Eathen Web";
const SITE_URL = "https://eathen.net"; // <-- change this
const DEFAULT_TITLE = "Eathen Web — Websites for Small Businesses";
const DEFAULT_DESCRIPTION =
  "I build clean, fast websites for small businesses that turn visitors into calls and customers.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`; // optional: add /public/og.png

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Robots */}
        <meta name="robots" content="index,follow" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
