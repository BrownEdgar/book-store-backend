
import express from "express"
import { createAuthor, deleteById, getAllAuthors, getAuthorsName, getSpecialAuthor } from '../controllers/Author.controller.js';
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images')
  },
  filename: function (req, file, cb) {

    const uniqueSuffix = `author-${Date.now()}-${Math.round(Math.random() * 1e5)}.`
    cb(null, uniqueSuffix + file.mimetype.split('/')[1])
  }
})

const upload = multer({ storage: storage })
router.get('/', getAllAuthors);
router.get('/:id', getAllAuthors);
router.post('/', upload.single('avatar'), createAuthor);
router.get('/get-authors', getAuthorsName);
router.get('/specialAuthor/:id', getSpecialAuthor);
router.delete('/:id', deleteById);


export default router;

