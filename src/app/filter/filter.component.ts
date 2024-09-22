import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  inputConfig = [
    { type: 'number', placeholder: 'number 1' },
    { type: 'number', placeholder: 'number 2' },
    { type: 'number', placeholder: 'number 3' },
    { type: 'number', placeholder: 'number 4' },
    { type: 'number', placeholder: 'number 5' },
  ];

  tableData: number[][] = [];

  getUserInput(inp: number[]) {
    from(inp)
      .pipe(filter((value) => value > 10))
      .subscribe((filteredValue) => {
        this.tableData.push([filteredValue]);
      });
  }
}
