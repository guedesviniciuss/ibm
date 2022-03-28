import { container, delay } from 'tsyringe';

import BookRepository from 'repositories/implementations/BookRepository';
import IBookRepository from 'repositories/interfaces/IBookRepository';

container.registerSingleton<IBookRepository>(
  'BookRepository',
  delay(() => BookRepository),
);
