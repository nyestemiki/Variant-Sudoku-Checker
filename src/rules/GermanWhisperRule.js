import Rule from "./_Rule.js";

class GermanWhisperRule extends Rule {
  constructor({ cells }) {
    super();

    this.title = "German Whisper Rule";
    this.description =
      "Adjacent digits on a dutch whisper differ by at least 5.";

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
        if (Math.abs(previousValue - val) < 5) {
          return false;
        } else {
          previousValue = val;
        }
      }
    }
    return true;
  }
}

export default GermanWhisperRule;
