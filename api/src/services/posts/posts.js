import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  if (!context.currentUser) {
    throw new Error('You must be logged in to do this')
  }
  console.log('input: ' + JSON.stringify(input))
  console.log('user id ' + context.currentUser.id)
  /*
  return db.post.create({
    data: { ...input, userId: context.currentUser.id },
  })
  */
}

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post = {
  user: (_obj, { root }) =>
    db.post.findFirst({ where: { id: root.id } }).user(),
}
