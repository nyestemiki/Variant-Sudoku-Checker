import getSudokuDigit from "../helpers/getSudokuDigit.js";
import SudokuCoords from "../SudokuCoords.js";
import Rule from "./_Rule.js";

class DistinctDiagonalRule extends Rule {
  constructor({ isNegative }) {
    super();

    this.title = "Distinct Diagonal Rule";
    this.description = "Digits cannot repeat on a diagonal.";

    this.isNegative = isNegative;
  }

  evaluate(sudoku, config) {
    const digits = [];

    for (let i = 0; i < config.board.rows; i++) {
      digits.push(
        getSudokuDigit(
          sudoku,
          config,
          this.isNegative
            ? new SudokuCoords(config.board.columns - i, i + 1)
            : new SudokuCoords(i + 1, i + 1)
        )
      );
    }

    return digits.length === new Set(digits).size;
  }
}

export default DistinctDiagonalRule;
