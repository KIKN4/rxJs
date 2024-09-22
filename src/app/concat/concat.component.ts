import { Component } from '@angular/core';
import { concat, delay, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent {
  public tableHeaders = ['სახელი', 'გვარი'];
  public tableData: any[] = [];
  userInput!: number;
  inputConfig = [{ type: 'number', placeholder: 'შეიყვანე რიცხვი' }];

  getUserInput(inp: any[]) {
    const inputNumber = Number(inp[0]);

    if (
      isNaN(inputNumber) ||
      inp[0] === '' ||
      inp[0] === null ||
      inp[0] === undefined
    ) {
      alert('შეიყვანე რიცხვი');
      return;
    }

    this.userInput = inputNumber;

    const observableOne = of(this.userInput);
    const observableTwo = of((this.userInput += 1)).pipe(delay(1000));

    this.tableData = [];

    let observableIndex = 0;

    concat(observableOne, observableTwo).subscribe({
      next: (value) => {
        if (observableIndex === 0) {
          this.tableData.push([value, 'Pending...']);
        } else {
          this.tableData[this.tableData.length - 1][1] = value;
        }
        observableIndex++;
      },
    });
  }
}
