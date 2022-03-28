import { inject, injectable } from 'tsyringe';
import IBookRepository from '@repositories/interfaces/IBookRepository';
import AppError from '../errors/AppError';
import Book from '../database/entities/Book';

interface IRequest {
  sbn: string;
  name: string;
  description: string;
  author: string;
  stock: number;
}

@injectable()
class CreateBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  async execute({
    sbn, name, description, author, stock,
  }: IRequest): Promise<Book> {
    const bookSbnAlreadyExists = await this.bookRepository.findBySbn(sbn);

    if (bookSbnAlreadyExists) {
      throw new AppError('Book\'s sbn alredy exists');
    }

    const book = await this.bookRepository.create({
      sbn,
      name,
      description,
      author,
      stock,
    });

    return book;
  }
}

export default CreateBookService;
