
import express from "express"
import { createBook, getAllBooks } from '../controllers/Book.controller.js';
import { getAuthorId } from '../middlewares/getAuthorId.js';
const router = express.Router();


router.get('/', getAllBooks);
router.post('/', getAuthorId, createBook);

export default router;

