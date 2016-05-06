export class Angular2plotlyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2plotly-app h1')).getText();
  }
}
