import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoItem: TodoItem;
  @Output()
  todoCompleteRequested = new EventEmitter<TodoItem>();
  @Output()
  todoDeleteRequested = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  completeTodo() {
    this.todoCompleteRequested.emit(this.todoItem);
  }

  removeTodo() {
    this.todoDeleteRequested.emit(this.todoItem); 
  }

}
