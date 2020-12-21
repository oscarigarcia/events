import { TestBed } from '@angular/core/testing';

import { EventsRouterActivatorService } from './events-router-activator.service';

describe('EventsRouterActivatorService', () => {
  let service: EventsRouterActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsRouterActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
