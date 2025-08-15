import { Router } from "express";
import booksRouter from './book.routes.js'
import authorRouter from './author.routes.js'

const router = Router();


router.use('/books', booksRouter)
router.use('/authors', authorRouter)

export default router;
