import { DrawingToolPage } from './app.po';

describe('drawing-tool App', () => {
  let page: DrawingToolPage;

  beforeEach(() => {
    page = new DrawingToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
