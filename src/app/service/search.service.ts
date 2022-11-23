import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = "746bc9dc80924d48804b351fcba66356-87hbd7lFjPCkjQd91jtkgbNzR_6FE2lrfelE6r7zglgC7poxpj99h2WfwS_IfVP1tVyuueKJpi5JWz_4LP3Da059SDO1EQC-SUKHJdeQKDVjUmruRGZdlyC9tNSoI9Rk68i-Czw";

  constructor(private http: HttpClient) { }

  getResults(artist: string) {

    return this.http.get(
      "http://localhost:8080/api/search/"+ artist
    )
  }
}
