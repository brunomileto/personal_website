import '../styles/globals.css';

import { CodesContextProvider } from '../context/CodesContext';
import { BaseLayout } from '../layouts/BaseLayout';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CodesContextProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </CodesContextProvider>
  );
}

export default MyApp;
