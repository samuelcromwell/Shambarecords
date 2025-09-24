// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

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

          {/* 🚀 Preload ALL hero images so they begin downloading before paint */}
          <link rel="preload" as="image" href="/images/hero/smart-season.png" />
          <link rel="preload" as="image" href="/images/hero/cashboost.jpg" />
          <link rel="preload" as="image" href="/images/hero/vet-care.jpg" />
          <link rel="preload" as="image" href="/images/hero/shamba-shield.jpg" />
          <link rel="preload" as="image" href="/images/hero/shamba-connect.jpg" />
          {/* (Optional) add type= for slight hinting:
              type="image/png" / type="image/jpeg" */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
