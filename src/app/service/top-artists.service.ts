import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class TopArtistsService {
	constructor(private http: HttpClient) {}

	getSpotifyUserLogin() {
		return this.http.get(`${environment.apiUrl}/api/user-top-artists`);
	}
}
