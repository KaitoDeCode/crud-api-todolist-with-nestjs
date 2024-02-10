import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: any[] = [
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

  updateTodo(id: string, title: string, content: string): object {
    const todo = this.findTodoByUuid(id);
    this.todos[todo].title = title;
    this.todos[todo].content = content;
    return this.todos;
  }

  destroyTodo(id: string): object {
    const todo = this.findTodoByUuid(id);
    delete this.todos[todo];
    return this.todos;
  }

  private findTodoByUuid(id: string) {
    const todo = this.todos.findIndex((todo) => todo.id === id);
    if (todo === -1) {
      throw new NotFoundException(`Books with id ${id} not found`);
    }

    return todo;
  }
}
