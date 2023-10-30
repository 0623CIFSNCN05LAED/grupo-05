const { Colors } = require('../database/models/index')

module.exports = {
    listName: function () {
        return Colors.findAll({ attributes: ['name'] });
    },
    listColors: function () {
        return Colors.findAll({ attributes: ['id', 'name', 'codeHex'] });
    },

    findById: function (id) {
        return Colors.findByPk(id, {attributes: ['id', 'name', 'codeHex']}).then((color) => {
            return {
                id: color.id,
                name: color.name,
                codeHex: color.codeHex
            }
        });
    }
}
