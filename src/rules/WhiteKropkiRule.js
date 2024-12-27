import Rule from "./_Rule.js";
import getSudokuDigit from "../helpers/getSudokuDigit.js";

class WhiteKropkiRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "White Kropki Rule";
    this.description = "Digits on a white dot are consequitive";

    this.cells = cells;
  }

  evaluate(sudoku, config) {
    let previousValue;

    for (let i = 0; i < this.cells.length; i++) {
      if (!previousValue) {
        previousValue = getSudokuDigit(sudoku, config, this.cells[i]);
        continue;
      } else {
        const value = getSudokuDigit(sudoku, config, this.cells[i]);

        if (value === previousValue + 1 || value === previousValue - 1) {
          previousValue = value;
          continue;
        } else {
          console.error(
            `${this.name}: cells (${this.cells[i - 1].X}, ${
              this.cells[i - 1].Y
            }) and  (${this.cells[i].X}, ${
              this.cells[i].Y
            }) are not consequitive. Received: ${previousValue}:${value}`
          );
          return false;
        }
      }
    }

    return true;
  }
}

export default WhiteKropkiRule;
