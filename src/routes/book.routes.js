
import express from "express"
import { createBook, deleteById, getAllBooks, getFilteredBooks } from '../controllers/Book.controller.js';
import { getAuthorId } from '../middlewares/getAuthorId.js';
const router = express.Router();


router.get('/', getAllBooks);
router.post('/', getAuthorId, createBook);
router.get('/filter', getFilteredBooks);
router.delete('/:id', deleteById);


export default router;

