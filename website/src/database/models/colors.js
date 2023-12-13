module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Colors',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            code_hex: DataTypes.STRING,
        },
        {
            tableName: 'colors',
            // If don't want createdAt
            createdAt: false,
            // If don't want updatedAt
            updatedAt: false,

        });
    Model.associate = (db) => {
        Model.hasMany(db.ProductsColors,
            {
                as: "products_color",
                foreignKey: "id_color",

            });
        Model.belongsToMany(db.Products,
            {
                as: "products",
                through: "products_colors",
                foreignKey: "id_color",
                otherKey: "id_product",
                timestamps: false,
            });
    }

    return Model;
};
