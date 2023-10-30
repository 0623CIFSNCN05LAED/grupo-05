const { Sizes } = require('../database/models/index')

module.exports = {
    listName : function () {
        return Sizes.findAll({attributes: ['name']});
    },
    listSizes: () => {       
       return Sizes.findAll({attributes: ['id', 'name', 'shortName']});
    },

    findById: (id) => {
        return Sizes.findByPk(id, { attributes: ['id', 'name', 'shortName']}).then((size) => {
            return {
                    id: size.id,
                    name: size.name,
                    shortName: size.shortName,
                }
            });
    },
}
