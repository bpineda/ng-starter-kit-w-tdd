import { browser, by, element } from 'protractor';

describe('Home', () => {

  beforeEach(() => {
    browser.get('/home');
  });

  it('should have a paragraph', () => {
    expect(element(by.css('p')).isPresent()).toEqual(true);
  });

});
