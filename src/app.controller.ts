import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/books')
  getBooks() {
    return [
      {
        id: 1,
        title: 'Fly 1'
      }
    ]
  }

  @Get('/categories')
  getCategories() {
    return [
      {
        id: 1,
        categoryName: 'Infantil'
      },
      {
        id: 2,
        categoryName: 'Ciencia ficción'
      }
    ]
  }

  @Post('/new-user')
  addUser(@Body() body: any){
    return body;
  }

  @Post('/login')
  loginUser(@Body() body: any){
    return body;
  }

  @Put('/update-user:id')
  updateUser(@Param('id') id: number, @Body() body: any){
    return body;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
