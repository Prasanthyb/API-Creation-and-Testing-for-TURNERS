module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define("Cars", {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carvalue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Cars;
};