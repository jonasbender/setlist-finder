import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetlistService } from '../service/setlist.service';
import { AuthenticationService } from '../service/authentication.service';
import axios from 'axios';

@Component({
	selector: 'app-setlist',
	templateUrl: './setlist.component.html',
	styleUrls: ['./setlist.component.css'],
})
export class SetlistComponent implements OnInit {
	id!: string;
	setlist: any;
	errorMessage: any;
	invalidId!: false;
	playlistTitle!: string;
	private!: false;
	public response: any;

	constructor(
		private route: ActivatedRoute,
		private setlistService: SetlistService,
		private authService: AuthenticationService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.id = params['id'];
			console.log(params);
			this.reload();
		});

		this.route.queryParams.subscribe((params) => {
			const accessToken = params['access_token'];
			const refreshToken = params['refresh_token'];
			localStorage.setItem('access_token', '');
			localStorage.setItem('refresh_token', '');
			localStorage.setItem('access_token', accessToken);
			localStorage.setItem('refresh_token', refreshToken);
		});

		this.playlistTitle = this.PlaylistTitleConstructor();
		console.log(this.playlistTitle);
	}

	reload() {
		this.setlistService.getSetlist(this.id).subscribe((data) => {
			this.setlist = data;
			console.log('setlist: ' + JSON.stringify(this.setlist));
			this.playlistTitle = this.PlaylistTitleConstructor();
			console.log(this.playlistTitle);
		});
	}

	PlaylistTitleConstructor() {
		this.playlistTitle =
			this.setlist.artistName + ' at ' + this.setlist.eventVenue;

		return this.playlistTitle;
	}

	async createPlaylist() {
		const playlistRequest = {
			accessToken: localStorage.getItem('access_token'),
			trackIds: this.setlist.tracks.map(
				({ trackId }: { trackId: string }) => `spotify:track:${trackId}`
			),
			playlistImageUrl:
				'https://pub-cdn.apitemplate.io/2023/01/82531486-4ca1-4967-bf45-905374ff6969.jpeg',
			playlistName: this.playlistTitle,
			isPrivate: true,
		};
		console.log(
			'playlist Request Body: ' + JSON.stringify(playlistRequest, null, 2)
		);

		const response = await axios.post(
			'http://localhost:8080/api/createPlaylist',
			playlistRequest
		);
		console.log('playlist successfull');
	}

	LoginToSpotify() {
		const currentUrl = this.removeQueryParam();

		this.authService.getSpotifyUserLogin(currentUrl).subscribe((data) => {
			this.response = data;
			console.log('Login response' + this.response);
			window.location.href = this.response;
		});
	}

	removeQueryParam() {
		const currentUrl = this.router.url;
		var modifiedUrl = currentUrl.replace(/\/access_token\/[^\/]+/, '');
		modifiedUrl = 'http://localhost:4200' + modifiedUrl;
		console.log('Modified Url: ', modifiedUrl);
		return modifiedUrl;
	}
}
