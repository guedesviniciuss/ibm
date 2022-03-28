import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBookService from '../services/CreateBookService';

async function CreateBookController(request: Request, response: Response): Promise<Response> {
  const {
    sbn, name, description, author, stock,
  } = request.body;

  const createBookService = container.resolve(CreateBookService);
  const book = await createBookService.execute({
    sbn,
    name,
    description,
    author,
    stock,
  });

  return response.status(201).json({ book });
}

export default CreateBookController;
