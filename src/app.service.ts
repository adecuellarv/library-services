import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Books } from './books/entities/books.entity'

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Books) private booksRepo: Repository<Books>
  ) {}

  findAllBooks(){
    return this.booksRepo.find();
  }

  getHello (): string {
    return 'Hello World!'
  }
}
