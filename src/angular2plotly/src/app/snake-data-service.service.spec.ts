import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SnakeDataServiceService } from './snake-data-service.service';

describe('SnakeDataService Service', () => {
  beforeEachProviders(() => [SnakeDataServiceService]);

  it('should ...',
      inject([SnakeDataServiceService], (service: SnakeDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
