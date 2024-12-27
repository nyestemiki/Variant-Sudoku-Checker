class Rule {
  constructor() {
    this.name = "Rule";
    this.description = "Rule description";
  }

  evaluate() {
    throw new Error("evaluate() must be overwritten");
  }
}

export default Rule;
