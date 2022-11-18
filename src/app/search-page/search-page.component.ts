import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent  {
  results: searchResults | null = null;

  searchRequestSubscriptions: Subscription[] = [];

  constructor(private searchService : SearchService) { }

  onTextChange(changedText: string) {
    this.cancelPendingRequests();
    const SearchSubscription = this.searchService
      .getResults(changedText)
      .subscribe(
        response => {
          this.results = response;
        },
        errorResponse => {
          alert("there was an error while searching");
          console.error(errorResponse);
        }
        this.searchRequestSubscriptions.push(SearchSubscription);
      )
  }

  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach(sub => sub.unsubscribe());
  }

}
