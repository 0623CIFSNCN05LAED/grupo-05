module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Sizes', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        shortName: DataTypes.STRING,     
    }, 
    {
        tableName: 'sizes',
            
    });     
 
    return Model;
};
