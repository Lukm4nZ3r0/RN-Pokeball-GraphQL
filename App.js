import React from 'react';
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import AppContainer from './src/AppContainer'

const client = new ApolloClient({
  link: new HttpLink({
    uri:`https://graphql-pokemon.now.sh`
  }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
