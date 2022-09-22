import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input()
  todoItem!: TodoItem;
}
