import { TestTablePage } from './app.po';

describe('test-table App', () => {
  let page: TestTablePage;

  beforeEach(() => {
    page = new TestTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
