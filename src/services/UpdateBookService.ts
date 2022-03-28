import { inject, injectable } from 'tsyringe';

import AppError from '@errors/AppError';
import IBookRepository from '@repositories/interfaces/IBookRepository';

interface IRequest {
  name: string;
  description: string;
  author: string;
  stock: number;
}

@injectable()
class UpdateBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  async execute(id: string, {
    name,
    description,
    author,
    stock,
  }: IRequest) {
    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) {
      throw new AppError('Book does not exists');
    }

    const updatedBook = await this.bookRepository.update(id, {
      name,
      description,
      author,
      stock,
    });

    return updatedBook;
  }
}

export default UpdateBookService;
