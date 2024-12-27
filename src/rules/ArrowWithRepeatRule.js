import getSudokuDigit from "../helpers/getSudokuDigit";
import Rule from "./_Rule";

class ArrowWithRepeatRule extends Rule {
  constructor({ total, cells }) {
    super();

    this.name = "Arrow With Repeat Rule";
    this.description =
      "Digits on an arrow must sum to the circled digit. Digits may repeat.";

    this.total = total;
    this.cells = cells;
  }

  evaluate(sudoku, config) {
    return (
      this.cells.reduce(
        (acc, cell) => acc + getSudokuDigit(sudoku, config, cell),
        0
      ) === this.total && this.cells.length
    );
  }
}

export default ArrowWithRepeatRule;
