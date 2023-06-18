import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class SetlistService {
	constructor(private http: HttpClient) {}

	getSetlist(setlistId: string) {
		return this.http.get(`${environment.apiUrl}/api/tracks/` + setlistId);
	}
}
