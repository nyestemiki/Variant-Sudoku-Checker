import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class OddRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "Odd Rule";
    this.description = "The digit in a circle must be odd.";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    return this.cells.every(
      (cell) => getSudokuDigit(sudoku, config, cell) % 2 !== 0
    );
  }
}

export default OddRule;
