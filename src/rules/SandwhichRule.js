import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class SandwhichRule extends Rule {
  constructor({ total, cells }) {
    super();

    this.name = "Sandwhich Rule";
    this.description = "Digits between the 1 and the 9 sum to X";

    this.total = total;
    this.cells = cells;
  }

  evaluate(sudoku, config) {
    return (
      this.cells.reduce(
        (acc, cell) => acc + getSudokuDigit(sudoku, config, cell),
        0
      ) === total
    );
  }
}

export default SandwhichRule;
