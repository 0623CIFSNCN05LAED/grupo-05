const { Colors } = require('../database/models/index')

module.exports = {
    listName: function () {
        return Colors.findAll({ attributes: ['name'] });
    },
    listColors: function () {
        return Colors.findAll({ attributes: ['id', 'name', 'code_hex'] });
    },

    findById: function (id) {
        return Colors.findByPk(id, {attributes: ['id', 'name', 'code_hex']}).then((color) => {
            return {
                id: color.id,
                name: color.name,
                codeHex: color.code_hex
            }
        });
    }
}
