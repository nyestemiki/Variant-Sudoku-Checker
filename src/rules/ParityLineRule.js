import Rule from "./_Rule.js";

class ParityLineRule extends Rule {
  constructor({ cells }) {
    super();

    this.title = "Parity Line Rule";
    this.description =
      "Adjacent digits on a parity line must be of different parity.";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    let previousValue;
    for (let i = 0; i < this.cells.length; i++) {
      const val = parseInt(
        sudoku[this.cells[i].X_ * config.board.columns + this.cells[i].Y_]
      );

      if (!previousValue) {
        previousValue = val;
        continue;
      } else {
        if ((previousValue + val) % 2 === 0) {
          return false;
        } else {
          previousValue = val;
        }
      }
    }
    return true;
  }
}

export default ParityLineRule;
