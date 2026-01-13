import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 private todos$ = new BehaviorSubject<Todo[]>([]);


getTodos() {
return this.todos$.asObservable();
}


add(title: string) {
const todos = this.todos$.value;
this.todos$.next([
...todos,
{ id: Date.now(), title, completed: false }
]);
}


toggle(todo: Todo) {
this.todos$.next(
this.todos$.value.map(t =>
t.id === todo.id ? { ...t, completed: !t.completed } : t
)
);
}


delete(id: number) {
this.todos$.next(this.todos$.value.filter(t => t.id !== id));
}
}
