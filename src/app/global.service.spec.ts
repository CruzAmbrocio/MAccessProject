import { TestBed, inject } from '@angular/core/testing';

import { GlobalDataService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataService]
    });
  });

  it('should be created', inject([GlobalDataService], (service: GlobalDataService) => {
    expect(service).toBeTruthy();
  }));
});