// pages/_app.js
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/flaticon.css';
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import '../styles/sass/style.scss';

import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import CookieBanner from "../components/CookieBanner";

function Hydrate({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Ensure server markup === first client markup (empty), then mount.
  return <div suppressHydrationWarning>{mounted ? children : null}</div>;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Shamba Records - Digitizing the agriculture sector and increasing incomes to small scale farmers in Africa.</title>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Hydrate>
            <Component {...pageProps} />
            <CookieBanner />
          </Hydrate>
        </PersistGate>
      </Provider>

      <ToastContainer />
    </div>
  );
}
