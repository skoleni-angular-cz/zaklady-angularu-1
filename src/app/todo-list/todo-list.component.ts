import { Component, Input, OnInit } from '@angular/core';
import { ApiTodoService } from '../api-todo.service';
import { TodoItem } from '../model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoItem[] = [];
  newTodoName: string;

  constructor(
    private apiTodoServer: ApiTodoService,
  ) { }

  async ngOnInit() {
    await this.getAllTodos();
  }

  private async getAllTodos() {
    this.todos = await this.apiTodoServer.getAllTodos();
  }

  async addTodo() {
    if (this.newTodoName) {
      await this.apiTodoServer.create({
        name: this.newTodoName,
        complete: false,
      });
      await this.getAllTodos();
    }
  }

  async deleteTodo($event: TodoItem) {
    await this.apiTodoServer.deleteById($event.id);
    await this.getAllTodos();
  }

  async completeTodo($event: TodoItem) {
    await this.apiTodoServer.updateById(
      $event.id,
      {
        name: $event.name,
        complete: true,
      }
    );
    await this.getAllTodos();
  }

  todoNameChanged($event: string) {
    console.log($event);
    this.newTodoName = $event;
  }

}
