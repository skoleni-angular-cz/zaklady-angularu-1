import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  onButtonClick($event: any) {
    this.buttonClicked.emit();
  }

  @Input()
  label: string;
  @Output()
  buttonClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
