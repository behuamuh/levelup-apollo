import React from "react";
import { Query } from "react-apollo";
import {POST_QUERY} from '../../queries';
import UpdatePost from "./UpdatePost";

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

      const { post } = data;
      return (
        <div>
              <section>
                <h1>{post.title}</h1>
              </section>
              <section>
                <h1>Edit Post</h1>
                <UpdatePost post={post} />
              </section>
            </div>
      );
    }}
  </Query>
);
