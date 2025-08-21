import { Author } from "../models/index.js";

export const AuthorRepo = {
  getAllAuthors: async () => {
    const authors = await Author.find()
    return authors
  },

  createAuthor: async (body) => {
    const author = new Author(body)
    await author.save()
    return author
  },
  getAuthorId: async (aName) => {
    const author = Author.findOne({ name: aName })
    return author
  },
  getAuthorsName: async () => {
    const author = Author.find({}, {name : 1})
    return author
  }
}