/* eslint-disable no-shadow */
import Book from '@entities/Book';
import {
  ICreateBookDTO, IUpdateBookDTO, IPaginationDTO, IReturnPaginateDTO,
} from 'repositories/dtos/IBookDTO';
import IBookRepository from 'repositories/interfaces/IBookRepository';

class BookRepositoryInMemory implements IBookRepository {
  books: Book[] = [];

  async create({
    sbn, name, description, author, stock,
  }: ICreateBookDTO): Promise<Book> {
    const book = new Book();

    Object.assign(book, {
      sbn,
      name,
      description,
      author,
      stock,
    });

    this.books.push(book);
    return book;
  }

  async update(id: string, {
    name, description, author, stock,
  }: IUpdateBookDTO): Promise<Book> {
    const indexBook = this.books.findIndex((book) => book.id === id);

    this.books[indexBook] = {
      ...this.books[indexBook],
      name: name || this.books[indexBook].name,
      description: description || this.books[indexBook].description,
      author: author || this.books[indexBook].author,
      stock: stock || this.books[indexBook].stock,
    };

    return this.books[indexBook];
  }

  async listBooksName({ page = 1, limit = 5 }: IPaginationDTO): Promise<IReturnPaginateDTO> {
    const result = this.books.slice((page - 1) * limit, page * limit);

    return {
      data: result,
      total: this.books.length,
    };
  }

  async findById(id: string): Promise<Book | undefined> {
    const book = this.books.find((book) => book.id === id);
    return book;
  }

  async deleteById(id: string): Promise<void> {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    this.books.splice(bookIndex, 1);
  }

  async findBySbn(sbn: string): Promise<Book | undefined> {
    const book = this.books.find((book) => book.sbn === sbn);
    return book;
  }
}

export default BookRepositoryInMemory;
