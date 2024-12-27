import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class BetweenLineRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "Between Line Rule";
    this.description =
      "Digits must be between the two circled digits at the end of the line.";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    const firstDigit = getSudokuDigit(sudoku, config, this.cells[0]);
    const lastDigit = getSudokuDigit(
      sudoku,
      config,
      this.cells[this.cells.length - 1]
    );
    const biggerDigit = firstDigit > lastDigit ? firstDigit : lastDigit;
    const smallerDigit = firstDigit > lastDigit ? lastDigit : firstDigit;

    return this.cells.every(
      (digit) =>
        getSudokuDigit(sudoku, config, digit) > smallerDigit &&
        getSudokuDigit(sudoku, config, digit) < biggerDigit
    );
  }
}

export default BetweenLineRule;
