
import express from "express"
import { createBook, deleteById, getAllBooks, getBook, getBooksByGeanres, getFilteredBooks, getGenres, getSpecialBook } from '../controllers/Book.controller.js';
import { getAuthorId } from '../middlewares/getAuthorId.js';
const router = express.Router();
import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `book-${Date.now()}-${Math.round(Math.random() * 1e5)}.`
    cb(null, uniqueSuffix + file.mimetype.split('/')[1])
  }
})

const upload = multer({ storage: storage })

router.get('/', getAllBooks);
router.post('/', [upload.single('poster'), getAuthorId,], createBook);
router.get('/filter', getFilteredBooks);
router.get('/genres', getBooksByGeanres);
router.get('/get-genres', getGenres);
router.get('/:id', getBook);
router.get('/specialBook/:id', getSpecialBook);


router.delete('/:id', deleteById);


export default router;

