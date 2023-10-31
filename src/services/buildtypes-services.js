const { BuildTypes } = require('../database/models/index')

module.exports = {
    listBuildTypes: () => {       
       return BuildTypes.findAll({attributes: ['id', 'name']});
    },

    findById: (id) => {
        return BuildTypes.findByPk(id, { attributes: ['id', 'name']}).then((buildType) => {
            return {
                    id: buildType.id,
                    name: buildType.name,
                }
            });
    },
}
