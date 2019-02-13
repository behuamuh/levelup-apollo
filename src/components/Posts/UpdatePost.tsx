import React from "react";
import { Mutation } from "react-apollo";
import {UPDATE_POST} from '../../queries';
import PostForm from "./PostForm";

export default ({post}: any) => {
  return (
    <Mutation mutation={UPDATE_POST}>
      {(addPost, {client}) => {
      //console.log(result);
      const onSuccess= ()=> {
        client.writeData({
          data: {
            isEditMode: false
          }
        })
      }
      return <PostForm onSuccess={onSuccess} handleSubmit={addPost} post={post}/>}}
    </Mutation>
  );
};
