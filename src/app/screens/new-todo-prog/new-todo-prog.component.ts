import { Component, OnInit } from '@angular/core';
import { Due as Todo } from 'src/app/models/due.model';
import { TodoApiService } from 'src/app/service/todo-api.service';

@Component({
  selector: 'app-new-todo-prog',
  templateUrl: './new-todo-prog.component.html',
  styleUrls: ['./new-todo-prog.component.css']
})
export class NewTodoProgComponent implements OnInit {

  todos: Todo[] = [];
  loading = false;

  constructor(private todoService: TodoApiService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.loading = true;

    this.todoService.getTodos().subscribe({
      next: (data: Todo[]) => {
        this.todos = data.slice(0, 10);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  toggle(todo: Todo) {
    const updated = { ...todo, completed: !todo.completed };

    this.todoService.updateTodo(updated).subscribe({
      next: (res: Todo) => {
        todo.completed = res.completed;
      },
      error: (err) => console.error(err)
    });
  }

  delete(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe({
      next: () => {
        this.todos = this.todos.filter(t => t.id !== todoId);
      },
      error: (err) => console.error(err)
    });
  }
}
