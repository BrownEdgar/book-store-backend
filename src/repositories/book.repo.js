import { Book } from "../models/index.js";

export const BookRepo = {
  getAllBooks: async () => {
    const books = await Book.find().populate('author')
    return books
  },
  getBook: async (id) => {
    const books = await Book.findOne({ _id: id }).populate('author')
    return books
  },
  createBook: async (body) => {
    const books = new Book(body)
    await books.save()
    return books
  },

  deleteById: async (id) => {
    const books = await Book.deleteOne({ _id: id })
    return books
  },

  getFilteredBooks: async () => {
    const books = await Book.find().sort({ price: -1 })
    return books
  },
  getBooksByGeanres: async (genre) => {
    const books = await Book.find({ genre }).sort({ genre: 1 })
    return books
  },

  getGenres: async () => {
    const genres = await Book.aggregate([
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          geanre: "$_id",
          count: 1
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ])
    return genres
  },

}