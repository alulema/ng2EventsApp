import { Ng2EventsAppPage } from './app.po';

describe('ng2-events-app App', () => {
  let page: Ng2EventsAppPage;

  beforeEach(() => {
    page = new Ng2EventsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
