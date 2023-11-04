module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Sizes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            short_name: DataTypes.STRING,
        },
        {
            tableName: 'sizes',
            // If don't want createdAt
            createdAt: false,
            // If don't want updatedAt
            updatedAt: false,
        });

    Model.associate = (db) => {
        Model.hasMany(db.ProductsSizes,
            {
                as: "products_size",
                foreignKey: "id_size",

            });
        Model.belongsToMany(db.Products,
            {
                as: "products",
                through: "products_sizes",
                foreignKey: "id_size",
                otherKey: "id_product",
                timestamps: false,
            });
    }

    return Model;
};