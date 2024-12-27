import Rule from "./_Rule.js";

class RenbanRule extends Rule {
  constructor({ cells }) {
    super();

    this.title = "Renban Rule";
    this.description = "Consequitive set of digits in any order, no repeat.";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    const digits = this.cells.map((cell) =>
      parseInt(sudoku[cell.X_ * config.board.columns + cell.Y_])
    );

    digits.sort();

    return (
      digits.length === new Set(digits).size &&
      digits[0] + digits.length - 1 === digits[digits.length - 1]
    );
  }
}

export default RenbanRule;
