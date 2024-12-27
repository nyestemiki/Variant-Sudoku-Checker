const getSudokuDigit = (sudoku, config, coords) => {
  return parseInt(sudoku[coords.X_ * config.board.columns + coords.Y_]);
};

export default getSudokuDigit;
