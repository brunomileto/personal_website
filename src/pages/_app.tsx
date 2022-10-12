import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';

import { CodesContextProvider } from '../context/CodesContext';
import { BaseLayout } from '../layouts/BaseLayout';
import { apolloClient } from '../libs/apollo/apollo';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CodesContextProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </CodesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
