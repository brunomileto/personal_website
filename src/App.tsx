import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from "react-router-dom";
import { apolloClient } from "./lib/apollo";
import { Router } from "./Router";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Router />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
