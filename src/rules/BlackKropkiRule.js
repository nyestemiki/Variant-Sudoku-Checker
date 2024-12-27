import Rule from "./_Rule.js";
import getSudokuDigit from "../helpers/getSudokuDigit.js";

class BlackKropkiRule extends Rule {
  constructor({ cells }) {
    super();

    this.name = "Black Kropki Rule";
    this.description = "Digits on a black dot are in a 1:2 ratio";

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

        if (value === 2 * previousValue || previousValue === 2 * value) {
          previousValue = value;
          continue;
        } else {
          console.error(
            `${this.name}: cells (${this.cells[i - 1].X}, ${
              this.cells[i - 1].Y
            }) and  (${this.cells[i].X}, ${
              this.cells[i].Y
            }) are not in a 1:2 ratio. Received: ${previousValue}:${value}`
          );
          return false;
        }
      }
    }

    return true;
  }
}

export default BlackKropkiRule;
