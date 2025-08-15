// middlewares/validate.middleware.js
import { validationResult } from "express-validator";
import { ValidationError } from "../utils/AppError.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.array().map(e => e.msg).join(",\n"));
  }
  next();
};
