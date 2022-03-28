import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ nullable: false })
    sbn: string;

  @Column({ nullable: false })
    name: string;

  @Column({ nullable: false })
    description: string;

  @Column({ nullable: false })
    author: string;

  @Column({ nullable: false })
    stock: number;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Book;
