import { evaluateRules } from "./evaluator";

const sudokuInput = {
  sudoku:
    "316289574782654319549731826671923458295478631834516297123847965467395182958162743",
  config: {
    board: {
      kind: boardKinds.REGULAR,
      rows: 9,
      columns: 9,
    },
  },
  rules: [{ name: rules.NORMAL_REGULAR }],
};

describe("Test normal regular 9x9 sudoku", () => {
  it("tests", () => {
    evaluateRules(sudokuInput);
  });
});
