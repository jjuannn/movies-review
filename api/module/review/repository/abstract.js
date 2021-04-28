const AbstractError = require("./error/abstract");

class AbstractRepository {
  constructor() {
    if (new.target === AbstractRepository) {
      throw new AbstractError("AbstractRepository cannot be instanced");
    }
  }
}

module.exports = AbstractRepository;
