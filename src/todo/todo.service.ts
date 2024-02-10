import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: object[] = [
    {
      id: 1,
      title: 'Belajar Flutter',
      content: 'Belajar Flutter bareng adi',
    },
    {
      id: 2,
      title: 'Belajar Flutter',
      content: 'Belajar Flutter bareng adi',
    },
  ];

  getAllTodos(): object[] {
    return this.todos;
  }

  createTodo(id: number, title: string, content: string): object {
    const data: object = {
      id,
      title,
      content,
    };

    this.todos.push(data);
    return this.todos;
  }
}
