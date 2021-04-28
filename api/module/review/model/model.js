const { Sequelize, DataTypes, Model } = require("sequelize");

class ReviewModel extends Model {
  /**
   *
   * @param {Sequelize} sequelizeInstance
   */
  static setup(sequelizeInstance) {
    ReviewModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        author_name: {
          type: DataTypes.STRING,
          allowNull: null,
        },
        movie_title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        movie_review: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rating: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          field: "created_at",
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: "updated_at",
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: "Review",
        paranoid: true,
        timestamps: true,
      }
    );
    return ReviewModel;
  }
}

module.exports = ReviewModel;
