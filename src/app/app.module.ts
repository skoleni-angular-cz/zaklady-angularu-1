import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyTextFieldComponent } from './my-text-field/my-text-field.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyButtonComponent, MyTextFieldComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
