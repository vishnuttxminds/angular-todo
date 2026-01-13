import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-insert-on-list',
  templateUrl: './insert-on-list.component.html',
  styleUrls: ['./insert-on-list.component.css']
})
export class InsertOnListComponent {

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
  this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
