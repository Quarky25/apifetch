import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from '../service/joke.service';
import { PlaceholderApiService } from '../service/placeholder-api.service';
import { ReqresApiService } from '../service/reqres-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
joke$!: Observable<any>;
result: any;

resultFromService: {id_joke: string, joke: string} = {} as {id_joke: string, joke: string};
resultFromPlaceholder: {userId: number, id: number, title: string, completed: boolean} = {} as {userId: number, id: number, title: string, completed: boolean};
resultFromReqres: {id: number, email: string, first_name: string, last_name: string, avatar: string} = {} as {id: number, email: string, first_name: string, last_name: string, avatar: string}

constructor(private http: HttpClient, private jokeService: JokeService, private placeholdService: PlaceholderApiService, private reqresService: ReqresApiService){
  this.joke$ = this.http.get<any>('http://api.serri.codefactory.live/random/');
  
  this.joke$.subscribe((result) => {
    console.log(result.joke);
    this.result = result;
  });
  //! api call as a service
  this.jokeService.getRandomJoke()
    .subscribe(arg => this.resultFromService = arg);

  //! Placeholder API Service
  this.placeholdService.getPlaceholderApi()
    .subscribe(arg => this.resultFromPlaceholder = arg);

  //! Reqres API Service
  this.reqresService.getReqres()
    .subscribe(arg => this.resultFromReqres = arg);
  
  
}
}
