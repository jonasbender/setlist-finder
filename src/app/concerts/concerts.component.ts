import { Component, OnInit } from '@angular/core';
import { SearchPageComponent } from '../search-page/search-page.component';
import { ConcertService } from '../service/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {
  
  selectedArtist: any = "";

  constructor(
    private searchPageComponent: SearchPageComponent,
    private concertService: ConcertService
  ) { }

  ngOnInit(): void {
    this.selectedArtist = this.searchPageComponent.SelectedArtist();
    console.log(this.selectedArtist);
  }

}
