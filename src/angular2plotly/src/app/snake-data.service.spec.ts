import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SnakeDataService } from './snake-data.service';

describe('SnakeData Service', () => {
  beforeEachProviders(() => [SnakeDataService]);

  it('should ...',
      inject([SnakeDataService], (service: SnakeDataService) => {
    expect(service).toBeTruthy();
  }));
});
