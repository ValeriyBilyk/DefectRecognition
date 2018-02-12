import { DefectRecognitionPage } from './app.po';

describe('defect-recognition App', () => {
  let page: DefectRecognitionPage;

  beforeEach(() => {
    page = new DefectRecognitionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
