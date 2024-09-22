import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, debounceTime, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css'],
})
export class CatchErrorComponent {
  errorMessage: string = '';
  private apiUrl = 'https://api.github.com/usersasdasd';
  private requestSubject = new Subject<void>();

  constructor(private http: HttpClient) {
    this.initializeDebouncedRequest();
  }

  initializeDebouncedRequest(): void {
    this.requestSubject
      .pipe(
        debounceTime(1000),
        switchMap(() =>
          this.http.get(this.apiUrl).pipe(
            catchError((error) => {
              this.errorMessage = error.error.message || 'An error occurred';
              return of([]);
            })
          )
        )
      )
      .subscribe();
  }

  getData(): void {
    this.requestSubject.next();
  }
}
