

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addPost
// ====================================================

export interface addPost_createPost {
  __typename: "Post";
  id: string;
  title: string | null;
  body: string | null;
}

export interface addPost {
  createPost: addPost_createPost;
}

export interface addPostVariables {
  title: string;
  body: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: post
// ====================================================

export interface post_post {
  __typename: "Post";
  body: string | null;
  title: string | null;
}

export interface post {
  post: post_post | null;
}

export interface postVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPosts
// ====================================================

export interface allPosts_posts {
  __typename: "Post";
  id: string;
  title: string | null;
}

export interface allPosts {
  posts: (allPosts_posts | null)[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updatePost
// ====================================================

export interface updatePost_updatePost {
  __typename: "Post";
  id: string;
  title: string | null;
  body: string | null;
}

export interface updatePost {
  updatePost: updatePost_updatePost | null;
}

export interface updatePostVariables {
  id: string;
  title?: string | null;
  body?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================