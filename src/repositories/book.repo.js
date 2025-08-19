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
  },

  deleteById: async (id) => {
    console.log(id);

    const books = await Book.deleteOne({ _id: id })
    return books
  },

  getFilteredBooks: async () => {
    const books = await Book.find().sort({ price: -1 })
    console.log(books.map(b => b.price));
    return books
  }
}