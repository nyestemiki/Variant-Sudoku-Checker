class SudokuCoords {
  // Sudoku notation: (Row, Column)
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get X() {
    return this.x;
  }

  get Y() {
    return this.y;
  }

  // Adjusted coordinate for array use
  get X_() {
    return this.x - 1;
  }

  // Adjusted coordinate for array use
  get Y_() {
    return this.y - 1;
  }
}

export default SudokuCoords;
