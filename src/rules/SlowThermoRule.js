import Rule from "./_Rule.js";

class SlowThermoRule extends Rule {
  constructor({ cells }) {
    super();

    this.title = "Slow Thermo Rule";
    this.description = "Digits must not decrease starting from the bulb";

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
        if (val < previousValue) {
          return false;
        } else {
          previousValue = val;
        }
      }
    }
    return true;
  }
}

export default SlowThermoRule;
