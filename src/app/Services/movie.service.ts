import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');
  }
}
