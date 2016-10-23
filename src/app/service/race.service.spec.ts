/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RaceService } from './race.service';

describe('Service: Race', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceService]
    });
  });

  it('should ...', inject([RaceService], (service: RaceService) => {
    expect(service).toBeTruthy();
  }));
});
