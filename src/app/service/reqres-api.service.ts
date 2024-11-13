import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  constructor(private http: HttpClient) { }

  getReqres(){
    return this.http.get<any>('https://reqres.in/api/users?page=2&per_page=5')
  }
}
