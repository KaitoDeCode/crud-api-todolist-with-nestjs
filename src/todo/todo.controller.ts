import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put('/:id')
  updateTodo(@Body() payload: any,@Param('id') id: string){
    return this.todoService.updateTodo(id,payload.title,payload.content);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string){
    return this.todoService.destroyTodo(id);
  }

}
