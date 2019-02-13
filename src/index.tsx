import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const defaultState = {
  isEditMode: false
};
// this is for sync cache from localStorage
persistCache({
  cache,
  storage: window.localStorage as PersistentStorage<PersistedData<NormalizedCacheObject>>
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: "https://api-euwest.graphcms.com/v1/cjrw13l2y0c6f01i6f2k6918s/master",
    clientState: {
      defaults: defaultState,
      resolvers: {}
    }
  });

  ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById("root"));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
