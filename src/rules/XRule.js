import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class XRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "X Rule";
    this.description = "Digits must sum to 10";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    return (
      this.cells.reduce(
        (acc, cell) => acc + getSudokuDigit(sudoku, config, cell),
        0
      ) === 10
    );
  }
}

export default XRule;
