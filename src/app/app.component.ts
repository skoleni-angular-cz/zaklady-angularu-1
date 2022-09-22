import { Component } from '@angular/core';
import { TodoItem } from './todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoItem: TodoItem = {
    id: 1,
    title: 'Buy milk',
    completed: false,
  };
}
