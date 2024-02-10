import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  
  @Get('/:title?')
  getAllTodo(@Param('title')title:string = '') {
    return `Todo Title ${title}`;
  }

  @Post()
  createTodo(@Body() payload:any){
    console.log(payload);
  }
}
