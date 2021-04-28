const AbstractController = require("./abstract");
const { userDataToEntity } = require("../mapper/review");
const FailedCreationError = require("../repository/error/failedCreation");
class ReviewController extends AbstractController {
  /**
   *
   * @param {import("../service/service")} ReviewService
   */
  constructor(uploadMiddleware, ReviewService) {
    super();
    this.uploadMiddleware = uploadMiddleware;
    this.ReviewService = ReviewService;
    this.ROUTE_BASE = "/reviews";
  }
  /**
   *
   * @param {import("express").Application} app
   */
  configureRoutes(app) {
    app.post(`${this.ROUTE_BASE}/create`, this.create.bind(this));
  }
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async create(req, res) {
    const { body } = req;
    try {
      const data = userDataToEntity(body);
      await this.ReviewService.create(data);
      res.status(201).send("Success!");
    } catch (err) {
      if (err instanceof FailedCreationError) {
        res
          .status(400)
          .send("Something failed while created a review! Try again :/");
      } else {
        res.status(400).send("Something failed! Try again :/");
      }
    }
  }
}

module.exports = ReviewController;
