import { Assignment2Day11Page } from './app.po';

describe('assignment2-day11 App', () => {
  let page: Assignment2Day11Page;

  beforeEach(() => {
    page = new Assignment2Day11Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
