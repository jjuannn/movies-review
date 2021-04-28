const {
  ReviewController,
  ReviewService,
  ReviewRepository,
  ReviewModel,
} = require("../module/review/module");
const { default: DIContainer, object, get, factory } = require("rsdi");
const multer = require("multer");
const { Sequelize } = require("sequelize");

function configureSequelize() {
  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DB_PATH,
  });

  return sequelize;
}

function configureMulter() {
  const upload = multer({
    dest: process.env.UPLOAD_MULTER_DIR,
  });

  return upload;
}

function configureReviewModel(container) {
  return ReviewModel.setup(container.get("Sequelize"));
}

function addDefinitions(container) {
  container.addDefinitions({
    Sequelize: factory(configureSequelize),
    multer: factory(configureMulter),
  });
}

function addReviewDefinitions(container) {
  container.addDefinitions({
    ReviewController: object(ReviewController).construct(
      get("multer"),
      get("ReviewService")
    ),
    ReviewService: object(ReviewService).construct(get("ReviewRepository")),
    ReviewRepository: object(ReviewRepository).construct(get("ReviewModel")),
    ReviewModel: factory(configureReviewModel),
  });
}

function configureContainer() {
  const container = new DIContainer();
  addDefinitions(container);
  addReviewDefinitions(container);
  return container;
}

module.exports = { configureContainer };
