import { TestRagularPage } from './app.po';

describe('test-ragular App', () => {
  let page: TestRagularPage;

  beforeEach(() => {
    page = new TestRagularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
