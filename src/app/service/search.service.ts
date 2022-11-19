import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = "746bc9dc80924d48804b351fcba66356-87hbd7lFjPCkjQd91jtkgbNzR_6FE2lrfelE6r7zglgC7poxpj99h2WfwS_IfVP1tVyuueKJpi5JWz_4LP3Da059SDO1EQC-SUKHJdeQKDVjUmruRGZdlyC9tNSoI9Rk68i-Czw";

  constructor(private http: HttpClient) { }

  getResults(artist: string) {
    
    let headers = new HttpHeaders().set('Authorization:', this.apiKey)
    .set('Content-Type:', 'application/json')
    .set('Accept:', 'application/json')
    .set('Authorization:', this.apiKey)

    return this.http.get(
      "https://api.spotify.com/v1/search?q="+ artist +"type=artist",
      {headers: headers}
    )
  }
}
