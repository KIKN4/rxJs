import { Component } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css'],
})
export class StartWithComponent {
  public tableHeaders = ['startWithResult'];
  public tableData: any[] = [];
  userInput!: number;
  inputConfig = [{ type: 'number', placeholder: 'შეიყვანე რიცხვი' }];

  getUserInput(inp: number[]) {
    of(inp)
      .pipe(startWith(0))
      .subscribe((value) => {
        this.tableData.push([value]);
      });
  }
}
