import { SecretSunPage } from './app.po';

describe('secret-sun App', () => {
  let page: SecretSunPage;

  beforeEach(() => {
    page = new SecretSunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
