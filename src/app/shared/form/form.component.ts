import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() inputConfig: { type: any; placeholder: string }[] = [];
  @Output() userInputEmited = new EventEmitter<any[]>();
  @Input() buttonName: string = '';

  userInputs: any[] = [];

  onSubmit() {
    this.userInputEmited.emit(this.userInputs);
  }
}
