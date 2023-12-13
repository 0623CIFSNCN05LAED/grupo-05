module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Categories',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            name: DataTypes.STRING,
        },
        {
            tableName: 'categories',
            timestamps:false,          
        });

    Model.associate = (db) => {

        Model.hasMany(db.Users,
            {
                as: "user",
                foreignKey: "id_category",

            });
    }

    return Model;
};
