import { TestBed, inject } from '@angular/core/testing';

import { ServicesHttpService } from './services-http.service';

describe('ServicesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesHttpService]
    });
  });

  it('should be created', inject([ServicesHttpService], (service: ServicesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
