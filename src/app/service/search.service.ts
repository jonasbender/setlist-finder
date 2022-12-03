import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  constructor(private http: HttpClient) { }

  getResults(artist: string) {

    return this.http.get(
      "http://localhost:8080/api/search/"+ artist
    )
  }
}
