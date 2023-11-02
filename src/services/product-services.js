// ** Requires's ----------------------------------------------------------------------------------------------
const { v4: uuidv4 } = require("uuid");
const { Products } = require('../database/models/index')
const { ProductsColors } = require('../database/models/index')
const { ProductsSizes } = require('../database/models/index')
const db = require('../database/models/index')
const Op = db.Sequelize.Op
const colorsServicesDB = require("./colors-services");
const sizesServicesDB = require("./sizes-services");

module.exports = {
  // Get the complete list of product that exist in the database  
  getAllProducts: () => {
    return Products.findAll();
  },
  getDiscountedProducts: () => {
    return Products.findAll({ where: { discount: { [Op.gt]: 0 } } });
  },
  getNewsProducts: () => {
    return Products.findAll({ where: { is_news: 1 } });
  },
  // Get the complete list of product that exist in the database  
  getProduct: async (id) => {
    return Products.findByPk(id, {
      include: ['brand', 'gender','sizes', 'colors']
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
        year: product.year,
        description: product.description,
        price: product.price,
        discount: product.discount,
        image: product.image,
        is_news: product.is_news,
        is_active: product.is_active,
        sizes: product.sizes.map((size) => {
          return {
            id: size.id,
            name: size.name,
            short_name: size.short_name
          };
        }),
        colors: product.colors.map((color) => {
          return {
            id: color.id,
            name: color.name,
            code_hex: color.code_hex
          };
        }),        
      }
    });
  },
  // Create a new product
  createProduct: (product) => {
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
      });
    console.log(`Creating product ${product.name} ${product.id}`);
  },
  // Delete a new product
  updateProduct: (id, productChanged) => {
    const product = {
      id: id,
      ...productChanged
    }
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
      },
      {
        where: { id: product.id }
      });
  },
  // Delete a new product
  deleteProduct: (id) => {
    console.log(`Deleting product with id ${id}`);
    return Products.destroy({ where: { id: id } });
  },
  getProductColors: (idProduct) => {  
    return ProductsColors.findAll({     include: ['colors'],
                                        where: { id_product: idProduct } });
  },
  getProductSizes: (idProduct) => {  
    return ProductsSizes.findAll({     include: ['sizes'],
                                        where: { id_product: idProduct } });
  },
}