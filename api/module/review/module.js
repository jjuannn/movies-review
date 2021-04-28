const ReviewController = require("./controller/controller");
const ReviewService = require("./service/service");
const ReviewRepository = require("./repository/repository");
const ReviewModel = require("./model/model");
function initReviewModule(app, container) {
  const controller = container.get("ReviewController");
  controller.configureRoutes(app);
}

module.exports = {
  ReviewController,
  ReviewService,
  ReviewRepository,
  ReviewModel,
  initReviewModule,
};
