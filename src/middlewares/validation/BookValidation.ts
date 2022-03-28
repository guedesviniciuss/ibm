import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

interface IErrorValidation {
  [key: string]: string;
}

const createBookValidationRules = () => [
  body('sbn').isNumeric().notEmpty(),
  body('name').isString().notEmpty(),
  body('author').isString().notEmpty(),
  body('description').isLength({ max: 200 }).notEmpty(),
  body('stock').isNumeric().notEmpty(),
];

const updateBookValidationRules = () => [
  body('name').isString().optional(),
  body('author').isString().optional(),
  body('description').isLength({ max: 200 }).optional(),
  body('stock').isNumeric().optional(),
];

const validate = (request: Request, response: Response, next: NextFunction) => {
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: Array<IErrorValidation> = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return response.status(422).json({
    errors: extractedErrors,
  });
};

export {
  createBookValidationRules,
  updateBookValidationRules,
  validate,
};
