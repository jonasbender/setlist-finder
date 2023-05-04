import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetlistService } from '../service/setlist.service';
import { AuthenticationService } from '../service/authentication.service';

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
		private authService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.id = params['id'];
			console.log(params);
			this.reload();
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

	createPlaylist() {
		console.log('playlist successfull');
	}

	LoginToSpotify() {
		const currentUrl = window.location.href;
		this.authService.getSpotifyUserLogin(currentUrl).subscribe((data) => {
			this.response = data;
			console.log('Login response' + this.response);
			window.location.href = this.response;
		});
	}
}
