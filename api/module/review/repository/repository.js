const AbstractRepository = require("./abstract");
const FailedCreationError = require("./error/failedCreation");
const { databaseToEntity } = require("../mapper/review");
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
  async getAll() {
    const REVIEWS = await this.ReviewModel.findAll({ order: [["id", "DESC"]] });
    const MAPPED_REVIEWS = REVIEWS.map((review) => {
      return databaseToEntity(review);
    });
    return MAPPED_REVIEWS;
  }
}

module.exports = ReviewRepository;
