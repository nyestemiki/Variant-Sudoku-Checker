import Rule from "./_Rule";

class NAMERule extends Rule {
  constructor({ cells }) {
    throw new Error("This is just a template");

    super();

    this.name = "NAME Rule";
    this.description = "DESCRIPTION";

    this.cells = cells;
  }

  evaluate(sudoku, config) {}
}

export default NAMERule;
