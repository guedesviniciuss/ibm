interface ICreateBookDTO {
  sbn: string;
  name: string;
  description: string;
  author: string;
  stock: number;
}

interface IUpdateBookDTO {
  name?: string;
  description?: string;
  author?: string;
  stock?: number;
}

interface IPaginationDTO {
  page?: number;
  limit?: number;
}

export { ICreateBookDTO, IUpdateBookDTO, IPaginationDTO };
