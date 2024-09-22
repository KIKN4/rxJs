import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, delay } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {
  public formGroup!: FormGroup;
  public tableHeaders = ['სახელი', 'გვარი'];
  public inputConfig = [
    { type: 'text', placeholder: 'სახელი' },
    { type: 'text', placeholder: 'გვარი' }
  ];
  public tableData: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    const inputOne$ = this.formGroup.get('userInputOne')?.valueChanges || '';
    const inputTwo$ = this.formGroup.get('userInputTwo')?.valueChanges || '';

    combineLatest([inputOne$, inputTwo$])
      .pipe(delay(300))
      .subscribe(([inputValueOne, inputValueTwo]) => {
        this.tableData = [[inputValueOne, inputValueTwo]];
      });
  }

  private createForm(): void {
    this.formGroup = this.fb.group({
      userInputOne: new FormControl<string>(''),
      userInputTwo: new FormControl<string>(''),
    });
  }

  onFormSubmit(inputs: any[]): void {
    this.formGroup.setValue({
      userInputOne: inputs[0],
      userInputTwo: inputs[1]
    });
  }
}
