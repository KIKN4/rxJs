import { Component } from '@angular/core';
import { delay, merge, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent {
  userInputOne!: number;
  userInputTwo!: string;

  results: { name: string; age: number }[] = [];
  tableData: [string, number][] = [];
  tableHeaders = ['სახელი', 'ასაკი'];
  inputConfig = [
    { type: 'text', placeholder: 'სახელი' },
    { type: 'number', placeholder: 'ასაკი' },
  ];

  tempName: string | null = null;
  tempAge: number | null = null;

  getUserInput(inp: any[]) {
    const inputName = inp[0];
    const inputAge = Number(inp[1]);

    if (isNaN(inputAge) || !inputName) {
      alert('შეავსე ყველა ინფუთი.');
      return;
    }

    this.userInputOne = inputAge;
    this.userInputTwo = inputName;

    const nameObservable = of(this.userInputTwo).pipe(delay(500));
    const ageObservable = of(this.userInputOne).pipe(delay(500));

    merge(nameObservable, ageObservable).subscribe((value) => {
      if (typeof value === 'string') {
        this.tempName = value;
      } else if (typeof value === 'number') {
        this.tempAge = value;
      }

      if (this.tempName && this.tempAge !== null) {
        this.results.push({ name: this.tempName, age: this.tempAge });

        this.tempName = null;
        this.tempAge = null;

        this.updateTableData();
      }
    });
  }

  updateTableData() {
    this.tableData = this.results.map((result) => [result.name, result.age]);
  }
}
