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
    app.get(`${this.ROUTE_BASE}/all`, this.getAll.bind(this));
  }
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async create(req, res) {
    const { body } = req;
    try {
      const DATA = userDataToEntity(body);
      await this.ReviewService.create(DATA);
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
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getAll(req, res) {
    try {
      const REVIEWS = await this.ReviewService.getAll();
      res.status(200).send({ results: REVIEWS });
    } catch (err) {
      res.status(400).send("Failure");
    }
  }
}

module.exports = ReviewController;
