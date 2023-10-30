module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Products',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            art: DataTypes.STRING,
            name: DataTypes.STRING,
            id_brand: DataTypes.INTEGER,
            collection: DataTypes.STRING,
            model: DataTypes.STRING,
            id_gender: DataTypes.INTEGER,
            id_color: DataTypes.INTEGER,
            id_size: DataTypes.INTEGER,
            year: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.INTEGER,
            discount: DataTypes.INTEGER,
            image: DataTypes.STRING,
            is_news: DataTypes.BOOLEAN,
            is_active: DataTypes.BOOLEAN
        },
        {
            tableName: 'products',
        // If don't want createdAt
        createdAt: false,
       // If don't want updatedAt
        updatedAt: false,              
        });

    Model.associate = (db) => {

        Model.belongsTo(db.Brands,
            {
                as: "brand",
                foreignKey: "id_brand",

            });
        Model.belongsTo(db.Genders,
            {
                as: "gender",
                foreignKey: "id_gender",

            });

    }

    return Model;
};
