import './styles/global.css';

import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client/react';

import { CodesContextProvider } from './contexts/CodesContext';
import { apolloClient } from './lib/apollo';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <CodesContextProvider>
          <Router />
        </CodesContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
