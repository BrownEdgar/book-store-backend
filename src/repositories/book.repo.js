import { Book } from "../models/index.js";

export const BookRepo = {
  getAllBooks: async () => {
    const books = await Book.find().populate('author')
    return books
  },
  createBook: async (body) => {
    console.log(body);

    const books = new Book(body)
    await books.save()
    return books
  }
}