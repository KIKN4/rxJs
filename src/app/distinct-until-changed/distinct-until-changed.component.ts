import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

export interface InputConfig {
  type: string;
  placeholder: string;
}

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css'],
})
export class DistinctUntilChangedComponent implements OnInit {
  inputConfig = [
    { type: 'text', placeholder: 'value1' },
    { type: 'text', placeholder: 'value2' },
    { type: 'text', placeholder: 'value3' },
  ];

  tableData: string[][] = [];
  filteredUserTableData: any[] = [];

  userData: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'John' },
  ];

  ngOnInit() {
    this.filteredUserTableData = this.userData.map((user) => [
      user.id,
      user.name,
    ]);
  }

  getUserInput(inp: string[]) {
    from(inp)
      .pipe(distinctUntilChanged())
      .subscribe((distinctValue) => {
        this.tableData.push([distinctValue]);
      });
  }

  getUserByKey() {
    this.filteredUserTableData = [];
    from(this.userData)
      .pipe(distinctUntilKeyChanged('name'))
      .subscribe((distinctUser) => {
        this.filteredUserTableData.push([distinctUser.id, distinctUser.name]);
      });
  }
}
