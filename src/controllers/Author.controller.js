import { asyncHandler } from '../middlewares/asyncHandler.js'
import { AuthorService } from '../services/Author.service.js'



export const getAllAuthors = asyncHandler(async (req, res) => {
  const Authors = await AuthorService.getAllAuthors()
  res.json(Authors)
})
export const createAuthor = asyncHandler(async (req, res) => {
  const { body } = req;
  const result = await AuthorService.createAuthor(body)
  res.json({ data: result })
})

