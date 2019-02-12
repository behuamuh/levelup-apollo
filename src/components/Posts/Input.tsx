import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
  const [title, changeTitle] = useState("");
  const [body, changeBody] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeTitle(event.target.value);
  };
  const handleBody = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeBody(event.target.value);
  };

  return (
    <Mutation mutation={ADD_POST}>
      {addPost => (
        <>
          <label>Title of new post</label>
          <input value={title} onChange={handleTitle} type="text" />
          <label>Body of new post</label>
          <input value={body} onChange={handleBody} type="text" />
          <button
            onClick={() => {
              addPost({
                variables: {
                  title,
                  body
                }
              });
              changeTitle("");
              changeBody("");
            }}
          >
            Add post
          </button>
        </>
      )}
    </Mutation>
  );
};
