import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
    }
  }
`;

export default () => (
  <Query query={POSTS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>ERROR</p>;

      return (
        <ul>
          {data.posts.map((post: any) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);
