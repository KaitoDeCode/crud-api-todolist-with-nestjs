import { Controller, Get, Param } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('/:title?')
  getAllTodo(@Param('title')title:string = '') {
    return `Todo Title ${title}`;
  }
}
