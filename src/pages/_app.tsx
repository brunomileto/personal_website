import '../styles/globals.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ApolloProvider } from '@apollo/client';

import { CodesContextProvider } from '../context/CodesContext';
import { PageNamesContextProvider } from '../context/PageNamesContext';
import { BaseLayout } from '../layouts/BaseLayout';
import { apolloClient } from '../libs/apollo/apollo';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale;
  return (
    <ApolloProvider client={apolloClient}>
      <CodesContextProvider>
        <PageNamesContextProvider language={locale}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </PageNamesContextProvider>
      </CodesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
