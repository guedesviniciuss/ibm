import { v4 as uuidv4 } from 'uuid';

import BookRepositoryInMemory from '@repositories/in-memory/BookRepositoryInMemory';
import DeleteBookService from '@services/DeleteBookService';
import AppError from '@errors/AppError';
import { book1 } from './mocks/bookMocks';

let deleteBookService: DeleteBookService;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('Delete book', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    deleteBookService = new DeleteBookService(bookRepositoryInMemory);
  });

  it('should be able to delete a book', async () => {
    const { id } = await bookRepositoryInMemory.create(book1);

    await deleteBookService.execute(id);

    const findDeletedBook = await bookRepositoryInMemory.findById(id);

    expect(findDeletedBook).toBeUndefined();
  });

  it('should be not able to delete a no existent book', async () => {
    expect(async () => {
      const id = uuidv4();

      await deleteBookService.execute(id);

      await bookRepositoryInMemory.findById(id);
    }).rejects.toBeInstanceOf(AppError);
  });
});
