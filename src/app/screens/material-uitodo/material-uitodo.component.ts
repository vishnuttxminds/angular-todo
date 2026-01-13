import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-material-uitodo',
  templateUrl: './material-uitodo.component.html',
  styleUrls: ['./material-uitodo.component.css'],
})
export class MaterialUItodoComponent {
  newTodo: string = '';

  todos: Todo[] = [];

  addTodo() {
    if (!this.newTodo.trim()) return;

    this.todos.push({
      id: Date.now(),
      title: this.newTodo,
      completed: false,
    });

    this.newTodo = '';
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
