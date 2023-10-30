const { Brands } = require('../database/models/index')

module.exports = {
    listBrands: () => {       
       return Brands.findAll({attributes: ['id', 'name']});
    },

    findById: (id) => {
        return Brands.findByPk(id, { attributes: ['id', 'name']}).then((brand) => {
            return {
                    id: brand.id,
                    name: brand.name,
                }
            });
    },
}
