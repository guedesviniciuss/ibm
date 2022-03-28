import { v4 as uuidv4 } from 'uuid';
import * as faker from '@faker-js/faker';

import BookRepositoryInMemory from '@repositories/in-memory/BookRepositoryInMemory';
import AppError from '@errors/AppError';
import UpdateBookService from './UpdateBookService';
import {
  book1,
} from './mocks/bookMocks';

let updateBookService: UpdateBookService;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('Update books', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    updateBookService = new UpdateBookService(bookRepositoryInMemory);
  });

  it('should be able to update a book', async () => {
    const { id } = await bookRepositoryInMemory.create(book1);

    const updatedBook = await updateBookService.execute(id, {
      author: faker.faker.name.firstName(),
      description: faker.faker.lorem.sentences(),
      name: faker.faker.name.title(),
      stock: Math.random(),
    });

    expect(updatedBook).toHaveProperty('id');
  });

  it('should not be able to update a book who a invalid id', async () => {
    expect(async () => {
      const id = uuidv4();

      await updateBookService.execute(id, {
        author: faker.faker.name.firstName(),
        description: faker.faker.lorem.sentences(),
        name: faker.faker.name.title(),
        stock: Math.random(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
