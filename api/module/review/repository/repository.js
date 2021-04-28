const AbstractRepository = require("./abstract");
const FailedCreationError = require("./error/failedCreation");
class ReviewRepository extends AbstractRepository {
  /**
   *
   * @param {import("../model/model")} ReviewModel
   */
  constructor(ReviewModel) {
    super();
    this.ReviewModel = ReviewModel;
  }
  /**
   *
   * @param {import("../entity/review")} review
   * @returns {Boolean}
   */
  async create(review) {
    try {
      const BUILD_OPTIONS = { isNewRecord: true };
      await this.ReviewModel.create(review, BUILD_OPTIONS);
      return true;
    } catch (err) {
      console.error(err);
      throw new FailedCreationError(
        "Something failed while creating a review!"
      );
    }
  }
}

module.exports = ReviewRepository;
