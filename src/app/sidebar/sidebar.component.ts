import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
	artistName: any;
	artistInRoute: boolean = false;

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			this.artistName = params['artist'];
			console.log('artist in route sidebar: ' + this.artistName);
			if (this.artistName && this.artistName.trim()) {
				this.artistInRoute = true;
				console.log(this.artistInRoute);
			}
		});
	}
}
