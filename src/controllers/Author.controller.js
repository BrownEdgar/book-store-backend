import { asyncHandler } from '../middlewares/asyncHandler.js'
import { AuthorService } from '../services/Author.service.js'



export const getAllAuthors = asyncHandler(async (req, res) => {
  const Authors = await AuthorService.getAllAuthors()
  res.json(Authors)
})
export const createAuthor = asyncHandler(async (req, res) => {
  const { body } = req;
  const data = {
    ...body,
    avatar: req.file.filename
  }
  const result = await AuthorService.createAuthor(data)
  res.json({ data: result })
})

export const getAuthorsName = asyncHandler(async (req, res) => {
  const Authors = await AuthorService.getAuthorsName()
  res.json(Authors)
})

export const getSpecialAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params
  const Authors = await AuthorService.getSpecialAuthor(id)
  res.json(Authors)
})

export const deleteById = asyncHandler(async (req, res) => {
  const { id } = req.params
  const Authors = await AuthorService.deleteById(id)
  res.json(Authors)
})