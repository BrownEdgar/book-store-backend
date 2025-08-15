import { BookRepo } from "../repositories/book.repo.js";

export const BookService = {
  getAllBooks: async () => {
    return await BookRepo.getAllBooks();
  },
  createBook: async (body) => {
    return await BookRepo.createBook(body);
  },
};
