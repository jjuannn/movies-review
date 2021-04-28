require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("working!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const { configureContainer } = require("./config/di");
const container = configureContainer();

const { initReviewModule } = require("./module/review/module");

initReviewModule(app, container);

const database = container.get("Sequelize");
database.sync();

const PORT = 8080;
app.listen(process.env.PORT || PORT, console.log(`Listening at port ${PORT}`));
