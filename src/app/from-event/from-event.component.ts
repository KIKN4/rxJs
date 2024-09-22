import { Component } from '@angular/core';
import { fromEvent, interval, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent {
  result: number = 0;
  clicks: any;
  interval$ = interval(1000);

  ngOnInit(): void {
    const button = document.getElementById('myButton');

    this.clicks = fromEvent(button!, 'click');

    this.clicks
      .pipe(switchMap(() => this.interval$.pipe(startWith(this.result))))
      .subscribe(() => {
        ++this.result;
      });
  }
}
