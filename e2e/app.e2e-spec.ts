import { ResumeClientAppPage } from './app.po';

describe('resume-client-app App', function() {
  let page: ResumeClientAppPage;

  beforeEach(() => {
    page = new ResumeClientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
