import { MAccessProjectPage } from './app.po';

describe('maccess-project App', () => {
  let page: MAccessProjectPage;

  beforeEach(() => {
    page = new MAccessProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
