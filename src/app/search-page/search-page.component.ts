import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent  {
  
  public artist! : string;


  constructor(
    private searchService : SearchService,

  )
  { }

  Submit() {
    this.searchService.getResults(this.artist).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
