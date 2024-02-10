import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  
  constructor(
   private todoService : TodoService
){
    this.todoService = todoService;
  }

  @Get()
  getAllTodo() {
    return this.todoService.getAllTodos();
  }

  @Post()
  createTodo(@Body() payload:any){
    return this.todoService.createTodo(payload.title,payload.content)
  }

}
