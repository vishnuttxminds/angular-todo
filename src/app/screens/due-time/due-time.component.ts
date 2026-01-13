import { Component } from '@angular/core';
import { Due as Todo } from 'src/app/models/due.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-due-time',
  templateUrl: './due-time.component.html',
  styleUrls: ['./due-time.component.css']
})
export class DueTimeComponent {

 todoForm: FormGroup;
  todos: Todo[] = [];
  idCounter = 1;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  addTodo() {
    if (this.todoForm.invalid) return;

    const todo: Todo = {
      id: this.idCounter++,
      title: this.todoForm.value.title,
      dueDate: this.todoForm.value.dueDate,
      completed: false
    };

    this.todos.push(todo);
    this.todoForm.reset();
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  isOverdue(todo: Todo): boolean {
    return !todo.completed && new Date(todo.dueDate) < new Date();
  }
}
