import Rule from "./_Rule.js";

class CageWithRepeatRule extends Rule {
  constructor({ total, cells }) {
    super();

    this.title = "Cage With Repeat Rule";
    this.description =
      "Digits inside a cage sum to the total of the cage. Digits may repeat.";

    this.total = total;
    this.cells = cells;
  }

  evaluate(sudoku, config) {
    const sum = this.cells.reduce(
      (acc, cell) =>
        acc + parseInt(sudoku[cell.X_ * config.board.columns + cell.Y_]),
      0
    );

    return sum == this.total;
  }
}

export default CageWithRepeatRule;
