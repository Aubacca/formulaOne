import { FormulaOnePage } from './app.po';

describe('formula-one App', function() {
  let page: FormulaOnePage;

  beforeEach(() => {
    page = new FormulaOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Formula One Information');
  });
});
