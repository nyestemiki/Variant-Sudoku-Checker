import Rule from "./_Rule.js";

class CageRule extends Rule {
  constructor({ total, cells }) {
    super();

    this.title = "Cage Rule";
    this.description =
      "Digits inside a cage sum to the total of the cage. Digits cannot repeat.";

    this.total = total;
    this.cells = cells;
  }

  evaluate(sudoku, config) {
    const digits = [];

    const sum = this.cells.reduce((acc, cell) => {
      const digit = parseInt(sudoku[cell.X_ * config.board.columns + cell.Y_]);
      acc += digit;
      digits.push(digit);
      return acc;
    }, 0);

    return sum == this.total && digits.length === new Set(digits).size;
  }
}

export default CageRule;
