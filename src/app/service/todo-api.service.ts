import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Due as Todo } from 'src/app/models/due.model';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
 private API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    try {
      const response: AxiosResponse<Todo[]> = await axios.get(this.API_URL);

      console.log("Response data:", response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching todos', error);
      throw error;
    }
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    try {
      const response: AxiosResponse<Todo> = await axios.put(
        `${this.API_URL}/${todo.id}`,
        todo
      );
      return response.data;
    } catch (error) {
      console.error('Error updating todo', error);
      throw error;
    }
  }

  // Delete todo
  async deleteTodo(id: number): Promise<void> {
    try {
      await axios.delete(`${this.API_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting todo', error);
      throw error;
    }
  }
}
