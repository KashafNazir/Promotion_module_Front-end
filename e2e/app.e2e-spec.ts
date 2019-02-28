import { PromotionModulePage } from './app.po';

describe('promotion-module App', function() {
  let page: PromotionModulePage;

  beforeEach(() => {
    page = new PromotionModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
