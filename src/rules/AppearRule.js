import getSudokuDigit from "../helpers/getSudokuDigit.js";
import Rule from "./_Rule.js";

class AppearRule extends Rule {
  constructor({ cells, digitsToAppear }) {
    super();

    this.name = "Appear Rule";
    this.description = "Digits must appear in the surrounding four cells";

    this.cells = cells;
    this.digitsToAppear = digitsToAppear;
  }

  evaluate(sudoku, config) {
    return this.digitsToAppear.every((digit) =>
      this.cells.some((cell) => getSudokuDigit(sudoku, config, cell) === digit)
    );
  }
}

export default AppearRule;
