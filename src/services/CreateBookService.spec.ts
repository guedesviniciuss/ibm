import BookRepositoryInMemory from '../repositories/in-memory/BookRepositoryInMemory';
import AppError from '../errors/AppError';
import CreateBookService from './CreateBookService';
import { book1 } from './mocks/bookMocks';

let createBookService: CreateBookService;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('Create book', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    createBookService = new CreateBookService(bookRepositoryInMemory);
  });

  it('should be able to create a new book', async () => {
    const createdBook = await createBookService.execute(book1);

    expect(createdBook).toHaveProperty('id');
  });

  it('should not be able to create a new book with the same sbn', async () => {
    expect(async () => {
      await createBookService.execute(book1);
      await createBookService.execute(book1);
    }).rejects.toBeInstanceOf(AppError);
  });
});
