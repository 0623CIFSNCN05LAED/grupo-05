const { Sizes } = require('../database/models/index')

module.exports = {
    listName : function () {
        return Sizes.findAll({attributes: ['name']});
    },
    listSizes: () => {       
       return Sizes.findAll({attributes: ['id', 'name', 'short_name']});
    },

    findById: (id) => {
        return Sizes.findByPk(id, { attributes: ['id', 'name', 'short_name']}).then((size) => {
            return {
                    id: size.id,
                    name: size.name,
                    shortName: size.short_name,
                }
            });
    },
}
