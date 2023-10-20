
const { Sizes } = require('../database/models/index')
/*
module.exports = {
    sizes : Sizes,
    listName : function () {
        //Extract only Name
    },
    listsizes: () => {
        console.log('Sizes: ' + Sizes.findAll());
        return Sizes.findAll();
    },
    findById: (id) => {
        return Sizes.findByPk(id, {
            include: ['sizes']
        }).then((size) => {
            console.log(size);    
            return {
                    id: size.id,
                    name: size.name,
                    shortName: size.shortName,
                }
            });
    },
}
*/