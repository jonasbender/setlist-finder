import { TestBed } from '@angular/core/testing';

import { PlaylistImageService } from './playlist-image.service';

describe('PlaylistImageService', () => {
  let service: PlaylistImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
