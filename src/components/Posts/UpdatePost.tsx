import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PostForm from "./PostForm";

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String, $body: String) {
    updatePost(data: { title: $title, body: $body }, where: { id: $id }) {
      id
      title
      body
    }
  }
`;

export default () => {
  return (
    <Mutation mutation={UPDATE_POST}>
      {addPost => <PostForm handleSubmit={addPost} />}
    </Mutation>
  );
};
