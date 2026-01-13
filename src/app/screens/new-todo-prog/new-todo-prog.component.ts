import { Component, OnInit } from '@angular/core';
import { Due as Todo } from 'src/app/models/due.model';
import { TodoApiService } from 'src/app/service/todo-api.service';

@Component({
  selector: 'app-new-todo-prog',
  templateUrl: './new-todo-prog.component.html',
  styleUrls: ['./new-todo-prog.component.css']
})
export class NewTodoProgComponent  implements OnInit {
  todos: Todo[] = [];
  loading = false;

  constructor(private todoService: TodoApiService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  async loadTodos() {
    this.loading = true;
    try {
      this.todos = await this.todoService.getTodos();
      this.todos = this.todos.slice(0, 10); 
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  async toggle(todo: Todo) {
    const updated = { ...todo, completed: !todo.completed };
    try {
      const res = await this.todoService.updateTodo(updated);
      todo.completed = res.completed;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(todoId: number) {
    try {
      await this.todoService.deleteTodo(todoId);
      this.todos = this.todos.filter(t => t.id !== todoId);
    } catch (error) {
      console.error(error);
    }
  }
}
