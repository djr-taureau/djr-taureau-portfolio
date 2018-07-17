import { overviewPage } from './overview.po';
import { getCurrentRouteUrl } from '../utils';

describe('overview Page', () => {
  let page: overviewPage;

  beforeEach(() => (page = new overviewPage()));

  it('should display main heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ANGULAR NGRX MATERIAL STARTER');
  });

  it('should display "Geting Started" section', () => {
    page.navigateTo();
    page
      .getGettingStarted()
      .isPresent()
      .then(isPresent => expect(isPresent).toBe(true));
  });

  it('first action button should lead to "projects" route', () => {
    page.navigateTo();
    page
      .getActionButton(0)
      .click()
      .then(() => expect(getCurrentRouteUrl()).toBe('projects'));
  });
});
