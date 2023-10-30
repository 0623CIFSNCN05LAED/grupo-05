// ** Requires's ----------------------------------------------------------------------------------------------
const { Products } = require('../../database/models/index')
const db = require('../../database/models/index')
const Op = db.Sequelize.Op

const { v4: uuidv4 } = require("uuid");

module.exports = {
    getProducts: function () {
        return Products.findAll();
    },
    getDiscountedProducts: function () {
        return Products.findAll({ where: { discount: { [Op.gt]: 0 } } });
    },
    getNewsProducts: function () {
        return Products.findAll({ where: { is_news: 1 } });
    },
    findById: function (id) {
        return Products.findByPk(id, {
            include: ['brand', 'gender']
        }).then((product) => {
            return {
                id: product.id,
                art: product.art,
                name: product.name,
                id_brand: product.id_brand,
                brand: product.brand.name,
                collection: product.collection,
                model: product.model,
                id_gender: product.id_gender,
                gender: product.gender.name,
                id_color: product.id_color,
                id_size: product.id_size,
                year: product.year,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                is_news: product.is_news,
                is_active: product.is_active,
            }
        });
    },
    create: function (product) {
        Products.create(
            {
                id: uuidv4(),
                art: product.art,
                name: product.name,
                id_brand: product.id_brand,
                collection: product.collection,
                model: product.model,
                id_gender: product.id_gender,
                year: product.year,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                is_news: product.is_news,
                is_active: product.is_active
                // id_color: product.id_color,
                // id_size: product.id_size,                
            });
            console.log(`Creating product ${product.name} ${product.id}`);
    },
    update: function (product) {
        Products.update(
            {
                art: product.art,
                name: product.name,
                id_brand: product.id_brand,
                collection: product.collection,
                model: product.model,
                id_gender: product.id_gender,
                year: product.year,
                description: product.description,
                price: product.price,
                discount: product.discount,
                image: product.image,
                is_news: product.is_news,
                is_active: product.is_active
                // id_color: product.id_color,
                // id_size: product.id_size,
            },
            {
                where: { id: product.id }
            });
    },
    delete: function (id) {
        console.log(`Deleting product with id ${id}`);
        return Products.destroy({ where: { id: id } });
    },
};