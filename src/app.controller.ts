import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/books')
  getBooks() {
    //return true;
    return this.appService.findAllBooks();
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
    return this.appService.addUser(body);
  }

  @Post('/login')
  loginUser(@Body() body: any){
    return this.appService.logginUser(body);
  }

  @Put('/update-user:id')
  updateUser(@Param('id') id: number, @Body() body: any){
    return body;
  }

}
