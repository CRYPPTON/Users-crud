import { TestBed } from '@angular/core/testing';

import { HandlePageService } from './handle-page.service';

describe('HandlePageService', () => {
  let service: HandlePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
