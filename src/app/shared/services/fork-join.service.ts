import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ForkJoinService {
  private URL: { [key: number]: string } = {
    1: 'https://api.github.com/users',
    2: 'https://dummyjson.com/users',
    3: 'https://api.escuelajs.co/api/v1/users',
  };

  constructor(private http: HttpClient) {}

  getGoogleUsers(url: number): Observable<any> {
    const requestUrl = this.URL[url];
    return this.http.get(requestUrl);
  }
}
