import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ButtonComponent, TextFieldComponent, TodoItemComponent, TodoListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
