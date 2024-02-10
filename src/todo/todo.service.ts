import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: object[] = [{}];

  getAllTodos(): object[] {
    return this.todos;
  }
}
