import { One11ELMAppPage } from './app.po';

describe('one11-elm-app App', () => {
  let page: One11ELMAppPage;

  beforeEach(() => {
    page = new One11ELMAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
