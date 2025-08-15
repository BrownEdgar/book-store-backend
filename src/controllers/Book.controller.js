import { asyncHandler } from '../middlewares/asyncHandler.js'
import { BookService } from '../services/Books.service.js'


export const getAllBooks = asyncHandler(async (req, res) => {
  const books = await BookService.getAllBooks()
  res.json(books)
})
export const createBook = asyncHandler(async (req, res) => {
  const { data } = req;

  const books = await BookService.createBook(data)
  res.json({ books })
})

