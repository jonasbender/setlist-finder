import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopArtistsService } from '../service/top-artists.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css']
})
export class TopArtistsComponent implements OnInit {

  public artistsData : any;


  constructor(
    private router : Router,
    private artistsService : TopArtistsService,
  ) { }

  ngOnInit(): void {

    this.artistsService.getSpotifyUserLogin().subscribe(
      data => {
        this.artistsData = data;
        console.log(this.artistsData);
      }
    )

  }

}
