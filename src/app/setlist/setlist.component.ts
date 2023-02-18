import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetlistService } from '../service/setlist.service';

@Component({
  selector: 'app-setlist',
  templateUrl: './setlist.component.html',
  styleUrls: ['./setlist.component.css']
})
export class SetlistComponent implements OnInit {

  id!: string;
  setlist: any;
  errorMessage: any;
  invalidId!: false;
  playlistTitle!: string;
  private!: true;

  constructor(
    private route: ActivatedRoute,
    private setlistService: SetlistService,
  ) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
        console.log(params);
        this.reload();
      })

      
    
      this.playlistTitle = this.PlaylistTitleConstructor();
      console.log(this.playlistTitle);


  }

  reload() {
    this.setlistService.getSetlist(this.id).subscribe(
      data => {
        this.setlist = data;
        console.log("setlist: "+this.setlist);
        this.playlistTitle = this.PlaylistTitleConstructor();
        console.log(this.playlistTitle);
      }
    );
  }

  PlaylistTitleConstructor() {
    
    this.playlistTitle = this.setlist.artistName +  " at " + this.setlist.eventVenue;

    return this.playlistTitle;
  }

}
