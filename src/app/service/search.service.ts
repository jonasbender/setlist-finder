import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SearchService {
	constructor(private http: HttpClient) {}

	getResults(artist: string) {
		return this.http.get(`${environment.apiUrl}/api/search/` + artist);
	}
}
