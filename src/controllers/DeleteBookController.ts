import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteBookService from '../services/DeleteBookService';

async function DeleteBookController(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const deleteBookService = container.resolve(DeleteBookService);
  await deleteBookService.execute(id);

  return response.status(200).send();
}

export default DeleteBookController;
