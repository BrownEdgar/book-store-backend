import { asyncHandler } from '../middlewares/asyncHandler.js'
import { BookService } from '../services/Books.service.js'


export const getAllBooks = asyncHandler(async (req, res) => {
  const books = await BookService.getAllBooks()
  res.json(books)
})
export const createBook = asyncHandler(async (req, res) => {

  const book = {
    ...req.data,
    poster: req.file.filename
  }

  const books = await BookService.createBook(book)
  res.json({ books })
})

export const deleteById = asyncHandler(async (req, res) => {
  const { id } = req.params;


  const books = await BookService.deleteById(id)
  res.json({ books })
})

export const getFilteredBooks = asyncHandler(async (req, res) => {
  const books = await BookService.getFilteredBooks()
  res.json(books)
})

export const getGenres = asyncHandler(async (req, res) => {
  const genres = await BookService.getGenres();
  res.json(genres); // ["Fiction", "Non-Fiction"]
});

export const getUnicGeanre = asyncHandler(async (req, res) => {
  const genres = await BookService.getUnicGeanre();
  res.json(genres); // ["Fiction", "Non-Fiction"]
});
