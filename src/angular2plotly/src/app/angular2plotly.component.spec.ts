import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2plotlyAppComponent } from '../app/angular2plotly.component';

beforeEachProviders(() => [Angular2plotlyAppComponent]);

describe('App: Angular2plotly', () => {
  it('should create the app',
      inject([Angular2plotlyAppComponent], (app: Angular2plotlyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2plotly works!\'',
      inject([Angular2plotlyAppComponent], (app: Angular2plotlyAppComponent) => {
    expect(app.title).toEqual('angular2plotly works!');
  }));
});
