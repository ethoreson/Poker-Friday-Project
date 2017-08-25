import { PokerNightPage } from './app.po';

describe('poker-night App', () => {
  let page: PokerNightPage;

  beforeEach(() => {
    page = new PokerNightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
