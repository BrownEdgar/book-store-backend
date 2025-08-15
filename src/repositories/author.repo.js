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
    console.log("author:", author);
    return author
  }
}