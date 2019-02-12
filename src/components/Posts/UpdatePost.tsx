import React from "react";
import { Mutation } from "react-apollo";
import {UPDATE_POST} from '../../queries';
import PostForm from "./PostForm";

export default ({post}: any) => {
  return (
    <Mutation mutation={UPDATE_POST}>
      {addPost => <PostForm handleSubmit={addPost} post={post}/>}
    </Mutation>
  );
};
