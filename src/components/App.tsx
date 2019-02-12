import React, { Component } from "react";
import "./App.css";
import ApolloClient, { HttpLink, InMemoryCache, gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Input from "./Posts/Input";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";

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
              <Link to="/">Home</Link>
              <Link to="/post/new">Add new post</Link>
            </header>
            <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/post/new" exact component={Input} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
