import React from "react";
import { Query } from "react-apollo";
import { POST_QUERY } from "../../queries";
import UpdatePost from "./UpdatePost";
import IsEditMode from "./IsEditMode";

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

      const { post, isEditMode } = data;
      return (
        <div>
          <IsEditMode isEditMode={isEditMode}/>
          {isEditMode ? (
            <section>
              <h1>Edit Post</h1>
              <UpdatePost post={post} />
            </section>
          ) : (
            <section>
              <h1>{post.title}</h1>
            </section>
          )}
        </div>
      );
    }}
  </Query>
);
