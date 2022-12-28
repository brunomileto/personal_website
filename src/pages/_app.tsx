import '../styles/globals.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ApolloProvider } from '@apollo/client';

import { CodesContextProvider } from '../context/CodesContext';
import { LocaleContextProvider } from '../context/LocaleContext';
import { PageNamesContextProvider } from '../context/PageNamesContext';
import { BaseLayout } from '../layouts/BaseLayout';
import { apolloClient } from '../libs/apollo/apollo';

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CodesContextProvider>
        <LocaleContextProvider>
          <PageNamesContextProvider>
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </PageNamesContextProvider>
        </LocaleContextProvider>
      </CodesContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
