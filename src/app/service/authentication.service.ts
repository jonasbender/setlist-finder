import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	constructor(private http: HttpClient) {}

	getSpotifyUserLogin(lastViewedUrl: string) {
		return this.http.get(
			`${environment.apiUrl}/api/login?lastViewedUrl=${encodeURIComponent(
				lastViewedUrl
			)}`,
			{ responseType: 'text' }
		);
	}
}
