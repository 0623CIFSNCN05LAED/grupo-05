module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('ProductsSizes',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            id_product: DataTypes.STRING,
            id_size: DataTypes.INTEGER,
        },
        {
            tableName: 'products_sizes',
            // If don't want createdAt
            createdAt: false,
            // If don't want updatedAt
            updatedAt: false,


        });
    Model.associate = (db) => {
        Model.belongsTo(db.Sizes,
            {
                as: "sizes",
                foreignKey: "id_size",

            });
    }
    return Model;
};
