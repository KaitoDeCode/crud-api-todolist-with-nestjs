import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  
  private todoService : TodoService;
  constructor(todoService : TodoService){
    this.todoService = todoService;
  }

  @Get('/:title?')
  getAllTodo(@Param('title')title:string = '') {
    return this.todoService.getAllTodos();
  }

}
