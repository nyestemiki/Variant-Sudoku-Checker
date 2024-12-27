import Rule from "./_Rule.js";

const getDivision = (config) => {
  if (config.board.rows === 9 && config.board.columns === 9) {
    return [3, 3, 9];
  }
};

const _checkDistinct = (group) => {
  return new Set(group.split("")).size === group.length;
};

const _checkDistinctRow = (sudoku, config) => {
  for (let i = 0; i < config.board.rows; i++) {
    const row = sudoku.slice(
      i * config.board.columns,
      (i + 1) * config.board.columns
    );

    if (!_checkDistinct(row)) {
      return false;
    }
  }

  return true;
};

const _checkDistinctColumn = (sudoku, config) => {
  for (let i = 0; i < config.board.columns; i++) {
    const column = [];
    for (let j = 0; j < config.board.rows; j++) {
      column.push(sudoku[i + j * config.board.columns]);
    }
    if (!_checkDistinct(column.join(""))) {
      return false;
    }
  }

  return true;
};

const _checkDistinctBox = (sudoku, config) => {
  const [rowsInBox, columnsInBox, boxes] = getDivision(config);

  for (let boxIndex = 0; boxIndex < boxes; boxIndex++) {
    const box = [];
    for (let rowIndex = 0; rowIndex < rowsInBox; rowIndex++) {
      const startIndex =
        (boxIndex % columnsInBox) * columnsInBox +
        rowIndex * config.board.columns +
        rowsInBox * config.board.columns * Math.floor(boxIndex / columnsInBox);
      const subRow = sudoku.slice(startIndex, startIndex + columnsInBox);
      box.push(subRow);
    }
    if (!_checkDistinct(box.join(""))) {
      return false;
    }
  }

  return true;
};

class NormalRegularRule extends Rule {
  constructor() {
    super();

    this.title = "Normal Regular Rule";
    this.description = "Distinct set of digits in every row, column and box.";
  }

  evaluate(sudoku, config) {
    return (
      _checkDistinctRow(sudoku, config) &&
      _checkDistinctColumn(sudoku, config) &&
      _checkDistinctBox(sudoku, config)
    );
  }
}

export default NormalRegularRule;
