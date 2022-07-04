import { TestBed } from '@angular/core/testing';

import { SeoServiceService } from './seo-service.service';

describe('SeoServiceService', () => {
  let service: SeoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
