module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('ProductsColors',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            id_product: DataTypes.STRING,
            id_color: DataTypes.INTEGER,
        },
        {
            tableName: 'products_colors',
            // If don't want createdAt
            createdAt: false,
            // If don't want updatedAt
            updatedAt: false,
        });
    Model.associate = (db) => {
        Model.belongsTo(db.Colors,
            {
                as: "colors",
                foreignKey: "id_color",

            });
    }
    return Model;
};
