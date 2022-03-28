import { v4 as uuidv4 } from 'uuid';

import BookRepositoryInMemory from '@repositories/in-memory/BookRepositoryInMemory';
import AppError from '@errors/AppError';
import FindBookService from './FindBookService';
import { book1 } from './mocks/bookMocks';

let findBookService: FindBookService;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('Find a book', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    findBookService = new FindBookService(bookRepositoryInMemory);
  });

  it('should be able to find data of a specific book', async () => {
    const { id } = await bookRepositoryInMemory.create(book1);

    const resultSearchBookById = await findBookService.execute(id);

    expect(resultSearchBookById).toHaveProperty('id');
  });

  it('should not be able to find data of a specific book with a invalid id', async () => {
    expect(async () => {
      const id = uuidv4();

      await findBookService.execute(id);
    }).rejects.toBeInstanceOf(AppError);
  });
});
