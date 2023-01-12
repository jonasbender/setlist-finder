import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetlistService {

  constructor(
    private http : HttpClient,

  ) { }

  getSetlist(setlistId: string){
    return this.http.get(
      'http://localhost:8080/api/tracks/' + setlistId)
  }

  
}
