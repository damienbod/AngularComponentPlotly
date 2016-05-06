import { Angular2plotlyPage } from './app.po';

describe('angular2plotly App', function() {
  let page: Angular2plotlyPage;

  beforeEach(() => {
    page = new Angular2plotlyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2plotly works!');
  });
});
