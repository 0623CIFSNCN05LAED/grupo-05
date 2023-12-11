module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Genders', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
    }, 
    {
        tableName: 'genders',  
        // If don't want createdAt
        createdAt: false,
       // If don't want updatedAt
        updatedAt: false,        
    });     
 
     
    Model.associate = (db) => {
        Model.hasMany( db.Products,
    {
        as: "products",
        foreignKey: "id_gender",

    });
    
    }
    return Model;
};
