import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Observable, Subject, Subscription, tap } from 'rxjs';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent  {
  
  public artist! : string;
  public searchResults : any
  public subscription!: Subscription;

  @ViewChild('input', { static: true })
  input!: ElementRef;

  constructor(
    private searchService : SearchService,

  )
  { }
  
  
  Submit() {
    this.subscription = this.searchService.getResults(this.artist).subscribe(
      data => {
        console.log(data);
        this.searchResults = data;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  

}
