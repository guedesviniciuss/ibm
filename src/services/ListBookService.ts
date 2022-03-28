import { inject, injectable } from 'tsyringe';

import IBookRepository from 'repositories/interfaces/IBookRepository';

interface IPagination {
  limit?: number;
  page?: number;
}

@injectable()
class ListBookService {
  constructor(
    @inject('BookRepository')
    private bookRepository: IBookRepository,
  ) {}

  async execute({ limit, page }: IPagination) {
    const books = await this.bookRepository.listBooksName({ limit, page });
    return books;
  }
}

export default ListBookService;
