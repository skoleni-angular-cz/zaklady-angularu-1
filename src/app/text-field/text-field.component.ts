import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Output()
  textChanged = new EventEmitter<string>();

  onKeyDown($event: KeyboardEvent) {
    console.log($event);

      this.textChanged.emit(($event.target as HTMLInputElement).value);


  }

  constructor() { }

  ngOnInit(): void {
  }

}
