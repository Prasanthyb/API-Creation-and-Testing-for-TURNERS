module.exports = (sequelize, DataTypes) => {
  const Risk = sequelize.define("Risk", {
    claimhistory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    riskrating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  });

  return Risk;
};