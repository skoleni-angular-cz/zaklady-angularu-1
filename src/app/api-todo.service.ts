import { Injectable } from '@angular/core';
import { deleteData, postData, putData } from './http-helpers';
import { TodoItem, TodoCreateUpdateDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  constructor() { }

  async getAllTodos(): Promise<TodoItem[]> {
    return (await fetch('http://localhost:3000/todos')).json();
  }

  async deleteById(id: number): Promise<void> {
    return (await deleteData(`http://localhost:3000/todos/${id}`)).json();
  }

  async updateById(id: number, todo: TodoCreateUpdateDto): Promise<void> {
    return (await putData(`http://localhost:3000/todos/${id}`, todo)).json();
  }

  async create(todo: TodoCreateUpdateDto): Promise<void> {
    return (await postData('http://localhost:3000/todos', todo)).json();
  }

}
