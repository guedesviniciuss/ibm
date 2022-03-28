import AppError from '@errors/AppError';
import IBookRepository from '@repositories/interfaces/IBookRepository';
import { inject, injectable } from 'tsyringe';
import * as uuid from 'uuid';

@injectable()
class FindBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  async execute(id: string) {
    const isUUID = uuid.validate(id);

    if (!isUUID) {
      throw new AppError('Book\'s ID invalid');
    }

    const book = await this.bookRepository.findById(id);

    if (!book) {
      throw new AppError('Book does not exists');
    }

    return book;
  }
}

export default FindBookService;
