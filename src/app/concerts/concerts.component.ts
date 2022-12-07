import { DatePipe } from '@angular/common';
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
  concerts: any;

  date: any;
  month: any;
  day: any;
  year: any;


  numberOfSongs: any;

  constructor(
    private searchPageComponent: SearchPageComponent,
    private concertService: ConcertService
  ) { }

  ngOnInit(): void {
    this.selectedArtist = this.searchPageComponent.onSelected();
    this.selectedArtist = this.selectedArtist.name;
    console.log(this.selectedArtist);

    this.concertService.getConcertResults(this.selectedArtist).subscribe(
      data => {
        this.concerts = data;
        console.log(this.concerts);
      }
    )
  }

  splitDate(dateString : string) {
    var month = dateString.split("-")[1];
    var day = dateString.split("-")[0];
    var year = dateString.split("-")[2];
    const date = new Date(+year, +month -1, +day);
    return date;
  }

  calculateNumberOfSongs(sets : any) {
    var numberOfSongs = 0;
    for (let i = 0; i<sets.set.length; i++) {
      var songArray = sets.set[i].song;
      numberOfSongs += songArray.length;
      
    }
    return numberOfSongs;
  }


}
