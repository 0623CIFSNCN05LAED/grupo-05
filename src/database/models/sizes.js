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
            
    });     
 
    return Model;
};
