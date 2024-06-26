import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
    uri: 'http://localhost:8080/INVENTORY-SERVICE/graphql',
    cache: new InMemoryCache()
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


