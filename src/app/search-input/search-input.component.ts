import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, tap, finalize, filter, distinctUntilChanged, switchMap, Observable, startWith, map } from 'rxjs';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit{


  myControl = new FormControl();
  filteredOptions!: Observable<any[]>; 
  options!: any[];

  constructor(
    private http: HttpClient,
    private searchService: SearchService
  ) {  
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  

  ngOnInit(): void {
  }

  filter(val: String): Observable<any[]> {
    return this.searchService.getResults(val)
    .pipe(
      map(response => response.filter(option => {
        return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
      }))
    )
  }
}
