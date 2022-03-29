import {
  ICreateBookDTO, IPaginationDTO, IReturnPaginateDTO, IUpdateBookDTO,
} from '../dtos/IBookDTO';
import Book from '../../database/entities/Book';

interface IBookRepository {
  create({
    sbn,
    name,
    description,
    author,
    stock,
  }: ICreateBookDTO): Promise<Book>;
  update(
    id: string,
    {
      name,
      description,
      author,
      stock,
    }: IUpdateBookDTO): Promise<Book>;
  listBooksName({ limit, page }: IPaginationDTO): Promise<IReturnPaginateDTO>;
  findById(id: string): Promise<Book | undefined>;
  deleteById(id: string): Promise<void>;
  findBySbn(sbn: string): Promise<Book | undefined>;
}

export default IBookRepository;
