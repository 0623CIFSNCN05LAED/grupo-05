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
            year: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.INTEGER,
            discount: DataTypes.INTEGER,
            image: DataTypes.STRING,
            is_news: DataTypes.BOOLEAN,
            is_active: DataTypes.BOOLEAN,
            created_by: DataTypes.STRING,
            updated_by: DataTypes.STRING,
        },
        {
            tableName: 'products',
       
            timestamps:true,
            createdAt: 'created_at',
            updatedAt: 'updated_at' ,          
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
        Model.belongsToMany(db.Sizes, {
                as: "sizes",
                through: "products_sizes",
                foreignKey: "id_product",
                otherKey: "id_size",
                timestamps: false,
              });
        Model.belongsToMany(db.Colors, {
                as: "colors",
                through: "products_colors",
                foreignKey: "id_product",
                otherKey: "id_color",
                timestamps: false,
              });              
    }

    return Model;
};
