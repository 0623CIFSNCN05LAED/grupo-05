module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      birthday: DataTypes.DATE,
      address: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: "users",

      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Model.associate = (db) => {
    Model.belongsTo(db.Categories, {
      as: "category",
      foreignKey: "id_category",
    });
    Model.belongsTo(db.BuildTypes, {
      as: "build_type",
      foreignKey: "id_build_type",
    });
  };

  return Model;
};
