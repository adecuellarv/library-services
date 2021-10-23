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

  addUser: any = async (body: any) => {
    const resp = await this.usersRepo.findOne({ where: { email: body.email } })
    if (!resp) {
      const objSession = {
        sessiontoken: (Math.random().toString(36) + '00000000000000000').slice(
          2,
          15 + 2,
        ),
      }
      const newUser = this.usersRepo.create({ ...body, ...objSession })
      const respca = await this.usersRepo.insert(newUser)
      if (respca) {
        return {
          code: 200,
          token: objSession.sessiontoken,
        }
      } else {
        return {
          code: 400,
          description: 'Hubo un error intenta nuevamente',
        }
      }
    } else {
      return {
        code: 400,
        description: 'Correo registrado previamente',
      }
    }
  }

  logginUser: any = async (body: any) => {
    const resp = await this.usersRepo.findOne({
      where: { email: body.email, paswd: body.paswd },
    })
    if (resp) {
      return {
        code: 200,
        data: resp,
      }
    } else {
      return {
        code: 400,
        description: 'El usuario no existe',
      }
    }
  }

  findUser (id: number) {
    return this.usersRepo.findOne(id)
  }

  updateuserInfo: any = async (id: number, body: any) => {
    const user = await this.usersRepo.findOne(id)
    this.usersRepo.merge(user, body)
    return this.usersRepo.save(user)
  }

  getHello (): string {
    return 'Hello World!'
  }
}
