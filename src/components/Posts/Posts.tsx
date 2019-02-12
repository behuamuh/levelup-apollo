import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import {POSTS_QUERY} from '../../queries';

export default () => (
  <Query query={POSTS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>ERROR</p>;

      return (
        <div><Link className='button' to="/post/new">Add new post</Link>
        <ul className="posts-listing">
          {data.posts.map((post: any) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        </div>
      );
    }}
  </Query>
);
