import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: object[] = [
    {
      id: uuidv4(),
      title: 'Belajar Flutter',
      content: 'Belajar Flutter bareng adi',
    },
  ];

  getAllTodos(): object[] {
    return this.todos;
  }

  createTodo(title: string, content: string): object {
    const data: object = {
      id: uuidv4(),
      title,
      content,
    };
    this.todos.push(data);
    return this.todos;
  }
}
