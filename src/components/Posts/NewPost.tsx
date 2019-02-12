import React from "react";
import { Mutation } from "react-apollo";
import PostForm from "./PostForm";
import {ADD_POST} from '../../queries';

export default () => {
  return (
    <div>
      <h1>New Post</h1>
    <Mutation mutation={ADD_POST}>
      {addPost => <PostForm handleSubmit={addPost} />}
    </Mutation>
    </div>
  );
};
