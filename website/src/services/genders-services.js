const { Genders } = require('../database/models/index')

module.exports = {
    listGenders: () => {       
       return Genders.findAll({attributes: ['id', 'name']});
    },

    findById: (id) => {
        return Genders.findByPk(id, { attributes: ['id', 'name']}).then((gender) => {
            return {
                    id: gender.id,
                    name: gender.name,
                }
            });
    },
}
