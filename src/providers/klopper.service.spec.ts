import { TestBed } from '@angular/core/testing';

import { KlopperService } from './klopper.service';

describe('KlopperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KlopperService = TestBed.get(KlopperService);
    expect(service).toBeTruthy();
  });
});
