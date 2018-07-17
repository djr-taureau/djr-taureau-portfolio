import { browser, by, element } from 'protractor';

export class overviewPage {
  navigateTo() {
    return browser.get('/overview');
  }

  getParagraphText() {
    return element(by.css('app-overview h1')).getText();
  }

  getGettingStarted() {
    return element(by.css('.get-started'));
  }

  getActionButton(idx) {
    return element.all(by.css('.actions a')).get(idx);
  }
}
