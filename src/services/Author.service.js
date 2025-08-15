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
};
