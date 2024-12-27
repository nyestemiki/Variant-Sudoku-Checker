import Rule from "./_Rule.js";

class DutchWhisperRule extends Rule {
  constructor({ total, cells }) {
    super();

    this.title = "Dutch Whisper Rule";
    this.description =
      "Adjacent digits on a dutch whisper differ by at least 4.";

    this.total = total;
    this.cells = cells;
  }

  evaluate(sudoku, config) {
    let previousValue;
    for (let i = 0; i < this.cells.length; i++) {
      const val = parseInt(
        sudoku[cells[i].X_ * config.board.columns + cells[i].Y_]
      );

      if (!previousValue) {
        previousValue = val;
        continue;
      } else {
        if (Math.abs(previousValue - val) < 4) {
          return false;
        } else {
          previousValue = val;
        }
      }
    }
    return true;
  }
}

export default DutchWhisperRule;
