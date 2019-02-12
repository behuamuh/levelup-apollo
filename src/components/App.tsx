import React, { Component } from "react";
import "./App.css";
import ApolloClient, { HttpLink, InMemoryCache, gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/NewPost";

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://api-euwest.graphcms.com/v1/cjrw13l2y0c6f01i6f2k6918s/master"
//   }),
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjrw13l2y0c6f01i6f2k6918s/master"
});

// client
//   .query({
//     query: testQuery
//   })
//   .then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
        <div className="App">
            <header className="App-header">
              <Link to={'/'}>
                <h1 className="App-title">GraphQL is Great</h1>
              </Link>
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/post/new" component={NewPost} />
                <Route path="/post/:id" component={Post} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
