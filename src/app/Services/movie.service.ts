import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }//injected

  GetMovieData():Observable<any>{//gets the data from the api
    return this.httpClient.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27barbie%27');//searches for movie with barbie in the title
  }
}
