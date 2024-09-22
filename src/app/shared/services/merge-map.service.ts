import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MergeMapService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserDataById(userId: any): Observable<any> {
    return this.http.get(`${this.url}/${userId}`);
  }

  getUserAdress(address: any): Observable<any> {
    return of(address);
  }
}
