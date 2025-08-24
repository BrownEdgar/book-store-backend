import { AuthorRepo } from '../repositories/author.repo.js';


export const AuthorService = {
  getAllAuthors: async () => {
    return await AuthorRepo.getAllAuthors();
  },
  createAuthor: async (body) => {
    return await AuthorRepo.createAuthor(body);
  },
  getAuthorId: async (body) => {
    return await AuthorRepo.getAuthorId(body);
  },
  getAuthorsName: async () => {
    return await AuthorRepo.getAuthorsName();
  },
  getSpecialAuthor: async (id) => {
    return await AuthorRepo.getSpecialAuthor(id);
  },
  deleteById: async (id) => {
    return await AuthorRepo.deleteById(id);
  },
};
