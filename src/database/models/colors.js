module.exports = (sequelize, DataTypes) => {

    const Model = sequelize.define('Colors', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        codeHex: DataTypes.STRING,     
    }, 
    {
        tableName: 'colors',
            
    });     
 
    return Model;
};
