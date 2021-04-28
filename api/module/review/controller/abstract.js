const AbstractError = require("./error/abstract");

class AbstractController {
  constructor() {
    if (new.target === AbstractController) {
      throw new AbstractError("AbstractController cannot be instanced");
    }
  }
}

module.exports = AbstractController;
