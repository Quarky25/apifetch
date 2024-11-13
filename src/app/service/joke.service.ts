import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {}

  getRandomJoke() {
    return this.http.get<any>('http://api.serri.codefactory.live/random/');
  }
}
