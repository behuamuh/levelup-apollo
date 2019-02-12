import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      body
      title
    }
  }
`;

export default (props: any) => (
  <Query
    query={POST_QUERY}
    variables={{
      id: props.match.params.id
    }}
  >
    {({ data, loading, error }) => {
      if (loading) return "Loading...";
      if (error) return "Error!";

      const { title, body } = data.post;
      return (
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      );
    }}
  </Query>
);
