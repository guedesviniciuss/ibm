import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListBookService from '../services/ListBookService';

async function ListBookController(request: Request, response: Response): Promise<Response> {
  const { page, limit } = request.query;

  const listBookService = container.resolve(ListBookService);
  const books = await listBookService.execute({
    page,
    limit,
  });

  return response.json({ books });
}

export default ListBookController;
