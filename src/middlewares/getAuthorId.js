import { AuthorService } from '../services/Author.service.js';

export const getAuthorId = async (req, res, next) => {
  const { body } = req;

  const x = await AuthorService.getAuthorId(body.author)

  const data = {
    ...body,
    author: x?._id || null,
  }
  req.data = data

  next()
}