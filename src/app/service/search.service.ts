import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = "c35We3GBKCaoF21NOBOeDQobebn9ttQ8wtzq";

  constructor(private http: HttpClient) { }

  getResults(artist: string) {
    
    let headers = new HttpHeaders().set('x-api-key:', this.apiKey)
    .set('Accept:', 'application/json');

    return this.http.get(
      "https://api.setlist.fm/rest/1.0/search/artists?artistName=" + artist + "&p=1&sort=relevance",
      {headers: headers}
    )
  }
}
