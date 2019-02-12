import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import PostForm from "./PostForm";

const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export default () => {
  return (
    <Mutation mutation={ADD_POST}>
      {addPost => <PostForm handleSubmit={addPost} />}
    </Mutation>
  );
};
