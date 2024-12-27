class CustomRule {
  constructor({ evalulateRule }) {
    this.name = "Custom Rule";
    this.description = "Whatever you want";

    this.evaluateRule = evalulateRule;
  }

  evaluate(sudoku, config) {
    return this.evaluateRule(sudoku, config);
  }
}

export default CustomRule;
