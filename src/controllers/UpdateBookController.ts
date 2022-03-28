import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateBookService from '../services/UpdateBookService';

async function UpdateBookController(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;
  const {
    name, description, author, stock,
  } = request.body;

  const updateBookService = container.resolve(UpdateBookService);
  const updatedBook = await updateBookService.execute(id, {
    name, description, author, stock,
  });

  return response.json({ updatedBook });
}

export default UpdateBookController;
