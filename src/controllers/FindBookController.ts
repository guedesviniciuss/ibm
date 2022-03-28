import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindBookService from '../services/FindBookService';

async function FindBookController(request: Request, response: Response): Promise<Response> {
  const { id } = request.params;

  const findBookService = container.resolve(FindBookService);
  const book = await findBookService.execute(id);

  return response.json({ book });
}

export default FindBookController;
