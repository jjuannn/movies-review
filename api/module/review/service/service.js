const Review = require("../entity/review");
const DataNotMappedError = require("./error/dataNotMappedError");

class ReviewService {
  /**
   *
   * @param {import("../repository/repository")} ReviewRepository
   */
  constructor(ReviewRepository) {
    this.ReviewRepository = ReviewRepository;
  }
  /**
   *
   * @param {Review} review
   * @returns {Boolean}
   */
  async create(review) {
    if (review instanceof Review) {
      return await this.ReviewRepository.create(review);
    } else {
      throw new DataNotMappedError();
    }
  }
}

module.exports = ReviewService;
