import gql from "graphql-tag";

export const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { status: PUBLISHED, title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

export const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      body
      title
    }
  }
`;

export const POSTS_QUERY = gql`
query allPosts {
  posts {
    id
    title
  }
}
`;

export const UPDATE_POST = gql`
mutation updatePost($id: ID!, $title: String, $body: String) {
  updatePost(data: { status: PUBLISHED, title: $title, body: $body }, where: { id: $id }) {
    id
    title
    body
  }
}
`;