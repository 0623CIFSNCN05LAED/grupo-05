module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('BuildTypes', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
    }, 
    {
        tableName: 'build_types',  
        // If don't want createdAt
        createdAt: false,
       // If don't want updatedAt
        updatedAt: false,        
    });     
 
/*     
    Model.associate = (db) => {
        Model.hasMany( db.Products,
    {
        as: "users",
        foreignKey: "id_build_type",

    });   
    }
*/    
    return Model;
};
