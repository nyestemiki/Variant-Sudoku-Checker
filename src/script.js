import sudokuInput from "./data/sudokuInput.js";

const checkInput = (sudokuInput) => {
  if (
    sudokuInput.sudoku.length !==
    sudokuInput.config.board.rows * sudokuInput.config.board.columns
  ) {
    return false;
  }

  return true;
};

const evaluateRules = (sudokuInput) => {
  if (!checkInput(sudokuInput)) {
    console.error("Input not valid");
  }

  return sudokuInput.rules.every((rule) =>
    rule.evaluate(sudokuInput.sudoku, sudokuInput.config)
  );
};

const isSolutionCorrect = evaluateRules(sudokuInput);

if (isSolutionCorrect) {
  console.log("✅");
} else {
  console.log("❌");
}
