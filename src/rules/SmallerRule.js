import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class SmallerRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "Smaller Rule";
    this.description = "The second digit must be smaller";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    return (
      getSudokuDigit(sudoku, config, this.cells[1]) >
      getSudokuDigit(sudoku, config, this.cells[0])
    );
  }
}

export default SmallerRule;
