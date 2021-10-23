import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Books } from './books/entities/books.entity'
import { Users } from './users/entities/users.entity'
import { config } from './orm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Books, Users])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
