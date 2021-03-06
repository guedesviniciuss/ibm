import { getRepository, Repository } from 'typeorm';
import IBookRepository from '../interfaces/IBookRepository';
import {
  ICreateBookDTO, IPaginationDTO, IReturnPaginateDTO, IUpdateBookDTO,
} from '../dtos/IBookDTO';

import Book from '../../database/entities/Book';

class BookRepository implements IBookRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = getRepository(Book);
  }

  async findById(id: string): Promise<Book | undefined> {
    const book = await this.repository.findOne(id);
    return book;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async listBooksName({ page = 0, limit = 3 }: IPaginationDTO): Promise<IReturnPaginateDTO> {
    const [result, total] = await this.repository
      .createQueryBuilder('books')
      .select(['books.id', 'books.name'])
      .skip(page)
      .take(limit)
      .getManyAndCount();

    return {
      data: result,
      total,
    };
  }

  async create({
    sbn,
    name,
    description,
    author,
    stock,
  }: ICreateBookDTO): Promise<Book> {
    const book = this.repository.create({
      sbn,
      name,
      description,
      author,
      stock,
    });

    await this.repository.save(book);
    return book;
  }

  async update(
    id: string,
    {
      name,
      description,
      author,
      stock,
    }: IUpdateBookDTO,
  ): Promise<Book> {
    const book = await this.repository.save({
      id,
      name,
      description,
      author,
      stock,
    });
    return book;
  }

  async findBySbn(sbn: string): Promise<Book | undefined> {
    const book = await this.repository.findOne({ where: { sbn } });
    return book;
  }
}

export default BookRepository;
