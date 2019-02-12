import React, { useState } from "react";

export default (props: any) => {
  const { post = {} } = props;
  const [title, changeTitle] = useState(post.title || "");
  const [body, changeBody] = useState(post.body || "");
  const { id = "" } = post;

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeTitle(event.target.value);
  };
  const handleBody = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeBody(event.target.value);
  };

  return (
    <>
      <label>Title of new post</label>
      <input value={title} onChange={handleTitle} type="text" />
      <label>Body of new post</label>
      <input value={body} onChange={handleBody} type="text" />
      <button
        className='button'
        onClick={() =>
          props.handleSubmit({ variables: { title, body, id } }).then(() => {
            changeTitle("");
            changeBody("");
          }).catch( (e:any ) => console.log(e))
        }
      >
        Add post
      </button>
    </>
  );
};
