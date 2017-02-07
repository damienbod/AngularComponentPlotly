/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnakeDataService } from './snake-data.service';

describe('Service: SnakeData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnakeDataService]
    });
  });

  it('should ...', inject([SnakeDataService], (service: SnakeDataService) => {
    expect(service).toBeTruthy();
  }));
});
