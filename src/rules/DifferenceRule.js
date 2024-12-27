import Rule from "./_Rule.js";
import getSudokuDigit from "../helpers/getSudokuDigit.js";

class DifferenceRule extends Rule {
  constructor({ cells, difference }) {
    super();

    this.name = "Difference Rule";
    this.description = `Digits must have a difference of ${difference}`;

    this.cells = cells;
    this.difference = difference;
  }

  evaluate(sudoku, config) {
    let previousValue;

    for (let i = 0; i < this.cells.length; i++) {
      if (!previousValue) {
        previousValue = getSudokuDigit(sudoku, config, this.cells[i]);
        continue;
      } else {
        const value = getSudokuDigit(sudoku, config, this.cells[i]);

        if (
          value === previousValue + this.difference ||
          value === previousValue - this.difference
        ) {
          previousValue = value;
          continue;
        } else {
          console.error(
            `${this.name}: cells (${this.cells[i - 1].X}, ${
              this.cells[i - 1].Y
            }) and  (${this.cells[i].X}, ${
              this.cells[i].Y
            }) do not have a difference of ${
              this.difference
            }. Received: ${previousValue}:${value}`
          );
          return false;
        }
      }
    }

    return true;
  }
}

export default DifferenceRule;
