import { CodevolRoutingPage } from './app.po';

describe('codevol-routing App', () => {
  let page: CodevolRoutingPage;

  beforeEach(() => {
    page = new CodevolRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
