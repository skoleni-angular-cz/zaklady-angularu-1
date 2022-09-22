import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-text-field',
  templateUrl: './my-text-field.component.html',
  styleUrls: ['./my-text-field.component.css'],
})
export class MyTextFieldComponent {
  @Input()
  placeholder: string = '';
}
