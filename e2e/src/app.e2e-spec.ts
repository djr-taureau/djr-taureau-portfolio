import { AppPage } from './app.po';

import { getCurrentRouteUrl } from './utils';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "overview" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual('overview');
  });

  it('should display current year in the footer', () => {
    page.navigateTo();
    expect(page.getCurrentYear()).toEqual(new Date().getFullYear().toString());
  });

  it('should have "overview", "projects", "Examples" menus', () => {
    page.navigateTo();
    page
      .getAllMenus()
      .then(menus => expect(menus).toEqual(['overview', 'projects', 'Examples']));
  });
});
