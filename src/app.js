import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";


const app = express();
dotenv.config()
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('uploads'));
app.use(express.static('public'))

app.use('/api', routes);

app.use(errorMiddleware)

export default app;

