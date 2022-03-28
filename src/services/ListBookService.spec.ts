import BookRepositoryInMemory from '@repositories/in-memory/BookRepositoryInMemory';
import ListBookService from './ListBookService';
import {
  book1, book2, book3, book4, book5,
} from './mocks/bookMocks';

let listBookService: ListBookService;
let bookRepositoryInMemory: BookRepositoryInMemory;

describe('List names of books', () => {
  beforeEach(() => {
    bookRepositoryInMemory = new BookRepositoryInMemory();
    listBookService = new ListBookService(bookRepositoryInMemory);
  });

  it('should be about to list all books names paginated', async () => {
    await bookRepositoryInMemory.create(book1);
    await bookRepositoryInMemory.create(book2);
    await bookRepositoryInMemory.create(book3);
    await bookRepositoryInMemory.create(book4);
    await bookRepositoryInMemory.create(book5);

    const all = await listBookService.execute({ page: 1, limit: 2 });

    expect(all).toHaveLength(2);
  });
});
