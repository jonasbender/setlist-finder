import { TestBed } from '@angular/core/testing';

import { TopArtistsService } from './top-artists.service';

describe('TopArtistsService', () => {
  let service: TopArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
