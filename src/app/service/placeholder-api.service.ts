import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderApiService {

  constructor(private http: HttpClient) { }

  getPlaceholderApi() {
   return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
  }
}
