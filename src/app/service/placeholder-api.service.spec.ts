import { TestBed } from '@angular/core/testing';

import { PlaceholderApiService } from './placeholder-api.service';

describe('PlaceholderApiService', () => {
  let service: PlaceholderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
