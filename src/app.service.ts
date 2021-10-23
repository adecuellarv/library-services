import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Books } from './books/entities/books.entity'
import { Users } from './users/entities/users.entity'

@Injectable()
export class AppService {
  constructor (
    @InjectRepository(Books) private booksRepo: Repository<Books>,
    @InjectRepository(Users) private usersRepo: Repository<Users>,
  ) {}

  findAllBooks () {
    return this.booksRepo.find()
  }

  addUser (body: any) {
    const newUser = this.usersRepo.create(body)
    return this.usersRepo.insert(newUser)
  }

  getHello (): string {
    return 'Hello World!'
  }
}
