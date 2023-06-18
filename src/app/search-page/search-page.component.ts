import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	finalize,
	fromEvent,
	Observable,
	Subject,
	Subscription,
	switchMap,
	tap,
} from 'rxjs';
import { MatAutocompleteModule } from '@angular/material';
import { MatCommonModule } from '@angular/material/core';
import { SearchService } from '../service/search.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from '@environments/environment';

@Component({
	selector: 'app-search-page',
	templateUrl: './search-page.component.html',
	styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
	/*
  public artist! : string;
  public searchResults : any
  public subscription!: Subscription;
  */

	searchArtistsCtrl = new FormControl();
	filteredArtists: any;
	isLoading = false;
	errorMsg!: string;
	minLengthTerm = 3;
	selectedArtist: any = '';
	artistName: any = '';

	@ViewChild('input', { static: true })
	input!: ElementRef;
	static selectedArtist: any;
	showDiv: boolean = false;

	constructor(
		private searchService: SearchService,
		private http: HttpClient,
		private router: Router,
		private route: ActivatedRoute
	) {}

	onSelected() {
		this.selectedArtist = this.selectedArtist;
		console.log('selectedArtist after reload: ' + this.selectedArtist.name);
		return this.selectedArtist;
	}

	displayWith(value: any) {
		return value?.name;
	}

	clearSelection() {
		this.selectedArtist = '';
		this.filteredArtists = [];
	}

	ngOnInit() {
		// this.route.queryParams.subscribe((params: Params) => {
		// 	this.artistName = params['artist'];
		// 	console.log(this.artistName);
		// 	if (this.artistName && this.artistName.trim()) {
		// 		this.selectedArtist = this.artistName.trim();
		// 		this.onSelected();
		// 	}
		// });

		this.searchArtistsCtrl.valueChanges
			.pipe(
				filter((res) => {
					return res !== null && res.length >= this.minLengthTerm;
				}),
				distinctUntilChanged(),
				debounceTime(300),
				tap(() => {
					this.errorMsg = '';
					this.filteredArtists = [];
					this.isLoading = true;
				}),
				switchMap((value) =>
					this.http
						.get(`${environment.apiUrl}/api/search/` + value)
						.pipe(
							finalize(() => {
								this.isLoading = false;
							})
						)
				)
			)
			.subscribe((data: any) => {
				if (data == undefined) {
					this.errorMsg = data['Error'];
					this.filteredArtists = [];
					console.log('error in Datasearch');
				} else {
					this.errorMsg = '';
					this.filteredArtists = data;
				}
				console.log('filtered Artists' + this.filteredArtists);
			});
	}

	get SelectedArtist() {
		return this.selectedArtist;
	}
}
