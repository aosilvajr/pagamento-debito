import { TestBed } from '@angular/core/testing';

import { GatewayService } from './gateway.service';

describe('GatewayService', () => {
  let service: GatewayService<jasmine.Any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
