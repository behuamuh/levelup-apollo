import React, { useState } from "react";

export default (props: any) => {
  const [title, changeTitle] = useState("");
  const [body, changeBody] = useState("");

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
        onClick={() => props.handleSubmit({ variables: { title, body } })}
      >
        Add post
      </button>
    </>
  );
};
