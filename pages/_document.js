// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon */}
          <link rel="icon" href="/Logo/logovector.svg" />

          {/* Networking hints for Cloudinary (we now serve hero images from Cloudinary) */}
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <link rel="dns-prefetch" href="https://res.cloudinary.com" />
          <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />

          {/* Do NOT preload hero images here. 
              Next/Image will add a preload for the LCP image when `priority` is set. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
