import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor(private http: HttpClient) {}

	getSpotifyUserLogin(lastViewedUrl: string) {
		return this.http.get(
			`http://localhost:8080/api/login?lastViewedUrl=${encodeURIComponent(
				lastViewedUrl
			)}`,
			{ responseType: 'text' }
		);
	}
}
