import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/src/styles/index.scss';

import { ApolloProvider } from '@apollo/client';
import { client } from './contexts/graphql-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
