import { browser, element, by } from 'protractor';

export class PromotionModulePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
