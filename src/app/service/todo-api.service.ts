import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Due as Todo } from 'src/app/models/due.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // GET todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  // UPDATE todo
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${this.API_URL}/${todo.id}`,
      todo
    );
  }

  // DELETE todo
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
