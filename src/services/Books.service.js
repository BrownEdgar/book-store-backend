import { BookRepo } from "../repositories/book.repo.js";

export const BookService = {
  getAllBooks: async () => {
    return await BookRepo.getAllBooks();
  },
  createBook: async (body) => {
    return await BookRepo.createBook(body);
  },

  deleteById: async (id) => {
    return await BookRepo.deleteById(id);
  },

  getFilteredBooks: async () => {
    return await BookRepo.getFilteredBooks();
  },

  getGenres: async () => {
    return await BookRepo.getGenres();
  },

  getUnicGeanre: async () => {
    return await BookRepo.getUnicGeanre();
  },
};