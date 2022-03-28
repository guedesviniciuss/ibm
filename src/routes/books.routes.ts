import DeleteBookController from 'controllers/DeleteBookController';
import FindBookController from 'controllers/FindBookController';
import ListBookController from 'controllers/ListBookController';
import UpdateBookController from 'controllers/UpdateBookController';
import { Router } from 'express';
import {
  validate, createBookValidationRules, updateBookValidationRules,
} from 'middlewares/validation/BookValidation';
import CreateBookController from '../controllers/CreateBookController';

const booksRoutes = Router();

booksRoutes.delete('/:id', DeleteBookController);
booksRoutes.get('/:id', FindBookController);
booksRoutes.get('/', ListBookController);
booksRoutes.post('/', createBookValidationRules(), validate, CreateBookController);
booksRoutes.patch('/:id', updateBookValidationRules(), validate, UpdateBookController);

export default booksRoutes;
