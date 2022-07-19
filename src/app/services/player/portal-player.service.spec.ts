import { TestBed } from '@angular/core/testing';

import { PortalPlayerService } from './portal-player.service';

describe('PortalPlayerService', () => {
  let service: PortalPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
