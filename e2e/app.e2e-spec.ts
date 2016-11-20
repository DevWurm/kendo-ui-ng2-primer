import { KendoUiNg2PrimerPage } from './app.po';

describe('kendo-ui-ng2-primer App', function() {
  let page: KendoUiNg2PrimerPage;

  beforeEach(() => {
    page = new KendoUiNg2PrimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
