import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ConcertService {
	constructor(private http: HttpClient) {}

	getConcertResults(artist: string) {
		return this.http.get(`${environment.apiUrl}/api/setlists/` + artist);
	}
}
