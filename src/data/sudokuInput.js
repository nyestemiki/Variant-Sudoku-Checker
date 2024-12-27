import AppearRule from "../rules/AppearRule.js";
import BlackKropkiRule from "../rules/BlackKropkiRule.js";
import CageRule from "../rules/CageRule.js";
import CageWithRepeatRule from "../rules/CageWithRepeatRule.js";
import GermanWhisperRule from "../rules/GermanWhisperRule.js";
import NormalRegularRule from "../rules/NormalRegularRule.js";
import RenbanRule from "../rules/RenbanRule.js";
import WhiteKropkiRule from "../rules/WhiteKropkiRule.js";
import SudokuCoords from "../SudokuCoords.js";

const sudokuInput = {
  sudoku:
    "316289574782654319549731826671923458295478631834516297123847965467395182958162743",
  config: {
    board: {
      kind: "regular",
      rows: 9,
      columns: 9,
    },
  },
  rules: [
    new NormalRegularRule(),
    new BlackKropkiRule({
      cells: [new SudokuCoords(7, 1), new SudokuCoords(7, 2)],
    }),
    new AppearRule({
      digitsToAppear: [2, 8],
      cells: [
        new SudokuCoords(1, 4),
        new SudokuCoords(1, 5),
        new SudokuCoords(2, 4),
        new SudokuCoords(2, 5),
      ],
    }),
    new WhiteKropkiRule({
      cells: [new SudokuCoords(7, 1), new SudokuCoords(7, 2)],
    }),
    new GermanWhisperRule({
      cells: [
        new SudokuCoords(4, 5),
        new SudokuCoords(4, 4),
        new SudokuCoords(5, 4),
      ],
    }),
    new CageRule({
      total: 10,
      cells: [
        new SudokuCoords(1, 1),
        new SudokuCoords(1, 2),
        new SudokuCoords(1, 3),
      ],
    }),
    new CageWithRepeatRule({
      total: 10,
      cells: [
        new SudokuCoords(1, 3),
        new SudokuCoords(1, 4),
        new SudokuCoords(2, 3),
      ],
    }),
    new RenbanRule({
      cells: [
        new SudokuCoords(1, 1),
        new SudokuCoords(1, 2),
        new SudokuCoords(2, 3),
      ],
    }),
  ],
};

export default sudokuInput;
