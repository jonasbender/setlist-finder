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

  constructor(
    private route: ActivatedRoute,
    private setlistService: SetlistService,
  ) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.id = params['id'];
      })

      this.setlistService.getSetlist(this.id).subscribe(
        data => {
          this.setlist = data;
          console.log("setlist: "+this.setlist);
        }
      );
    


  }

}
