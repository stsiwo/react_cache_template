import { normalize, schema } from 'normalizr';

// Define a users schema
export const userNormEntity = new schema.Entity('users');

// Define your comments schema
export const commentNormEntity = new schema.Entity('comments', {
  user: userNormEntity,
});

export const commentNormArray = new schema.Array(commentNormEntity)

// Define your blog
export const blogNormEntity = new schema.Entity('blogs', {
  user: userNormEntity,
  comments: commentNormArray 
});

export const blogNormArray = new schema.Array(blogNormEntity)

commentNormEntity.define({ blog: blogNormEntity })
userNormEntity.define({ blogs: blogNormArray, comments: commentNormArray })

export const userNormArray = new schema.Array(userNormEntity)
