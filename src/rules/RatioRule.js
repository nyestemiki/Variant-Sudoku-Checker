import Rule from "./_Rule.js";
import getSudokuDigit from "../helpers/getSudokuDigit.js";

class RatioRule extends Rule {
  constructor({ cells, ratio }) {
    super();

    this.name = "Ratio Rule";
    this.description = `Digits must be in a 1:${ratio} ratio`;

    this.cells = cells;
    this.ratio = ratio;
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
          value === ratio * previousValue ||
          previousValue === ratio * value
        ) {
          previousValue = value;
          continue;
        } else {
          console.error(
            `${this.name}: cells (${this.cells[i - 1].X}, ${
              this.cells[i - 1].Y
            }) and  (${this.cells[i].X}, ${
              this.cells[i].Y
            }) are not in a ${ratio} ratio. Received: ${previousValue}:${value}`
          );
          return false;
        }
      }
    }

    return true;
  }
}

export default RatioRule;
