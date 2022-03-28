import { inject, injectable } from 'tsyringe';

import * as uuidv4 from 'uuid';

import IBookRepository from 'repositories/interfaces/IBookRepository';
import AppError from '@errors/AppError';

@injectable()
class DeleteBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  async execute(id: string) {
    const isUUID = uuidv4.validate(id);

    if (!isUUID) {
      throw new AppError('Book\'s ID invalid');
    }

    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) {
      throw new AppError('Book does not exists');
    }

    await this.bookRepository.deleteById(id);
  }
}

export default DeleteBookService;
