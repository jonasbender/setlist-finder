import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  getConcertResults(artist: string) {

    return this.http.get(
      "http://localhost:8080/api/setlists/"+ artist
    )
  }
}
