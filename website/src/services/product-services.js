// ** Requires's ----------------------------------------------------------------------------------------------
const { v4: uuidv4 } = require("uuid");
const { Products } = require("../database/models/index");
const { ProductsColors } = require("../database/models/index");
const { ProductsSizes } = require("../database/models/index");
const db = require("../database/models/index");
const Op = db.Sequelize.Op;
const colorsServicesDB = require("./colors-services");
const sizesServicesDB = require("./sizes-services");

module.exports = {
  // Get the complete list of product that exist in the database
  getAllProducts: () => {
    return Products.findAll({ where: { is_active: 1 } });
  },
  getDiscountedProducts: () => {
    return Products.findAll({
      where: {
        discount: { [Op.gt]: 0 },
        is_active: 1,
      },
    });
  },
  getNewsProducts: () => {
    return Products.findAll({
      where: {
        is_news: 1,
        is_active: 1,
      },
    });
  },
  // Get the complete list of product that exist in the database
  getProduct: async (id) => {
    return Products.findByPk(id, {
      include: ["brand", "gender", "sizes", "colors"],
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
        created_at : product.created_at,
        sizes: product.sizes.map((size) => {
          return {
            id: size.id,
            name: size.name,
            short_name: size.short_name,
          };
        }),
        colors: product.colors.map((color) => {
          return {
            id: color.id,
            name: color.name,
            code_hex: color.code_hex,
          };
        }),
      };
    });
  },
  // Create a new product
  createProduct: (product) => {
    const new_product_id = uuidv4();

    Products.create({
      id: new_product_id,
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
      is_active: product.is_active,
      updated_by: product.updated_by,
      created_by: product.created_by,
    });
    if (product.colors){
    product.colors.forEach((color) => {
      ProductsColors.create({
        id: uuidv4(),
        id_product: new_product_id,
        id_color: color,
      });
    });
   };
   if (product.sizes){
    product.sizes.forEach((size) => {
      ProductsSizes.create({
        id: uuidv4(),
        id_product: new_product_id,
        id_size: size,
      });
    });
   };
  },
  // Delete a new product
  updateProduct: async (id, productChanged) => {
    const product = {
      id: id,
      ...productChanged,
    };
    await Products.update(
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
        is_active: product.is_active,
        updated_by: product.updated_by,
      },
      {
        where: { id: product.id },
      }
    );
    await ProductsColors.destroy({
      where: { id_product: product.id },
    });
    if (productChanged.colors){
    Promise.all(
      productChanged.colors.map((color) => {
        return ProductsColors.create({
          id: uuidv4(),
          id_product: product.id,
          id_color: color,
        });
      })
    )};

    await ProductsSizes.destroy({
      where: { id_product: product.id },
    });
    if (productChanged.sizes){ 
    Promise.all(
      productChanged.sizes.map((size) => {
        return ProductsSizes.create({
          id: uuidv4(),
          id_product: product.id,
          id_size: size,
        });
      })
    )};
  },
  // Delete a new product
  deleteProduct: (id) => {
    console.log(`is_active for product with id ${id} is 0`);
    return Products.update(
      {
        is_active: 0,
      },
      {
        where: { id: id },
      }
    );
  },
  getProductColors: (idProduct) => {
    return ProductsColors.findAll({
      include: ["colors"],
      where: { id_product: idProduct },
    });
  },
  getProductSizes: (idProduct) => {
    return ProductsSizes.findAll({
      include: ["sizes"],
      where: { id_product: idProduct },
    });
  },
  getTotalProductsByCategory: () => {
    return Products.findAll({
          attributes: ['id_brand', [db.Sequelize.fn('COUNT', db.Sequelize.col('id_brand')), 'ProductCount']],
          group: ['id_brand']
      });
  },
  getAllproductsAndCount: ({pageSize, offset}) => {
    return Products.findAndCountAll({
      limit: pageSize,
      offset: offset
    })
  },
  getAllProductsOverview: () => {
    return Products.findAll({
      attributes: ['id', 'name','description','is_active'],
      include: ["colors","sizes"]
      // detail → URL para obtener el detalle.
  });
  },
  getLastProduct: async () => {
    return Products.findAll({
      attributes: [
        "id","created_at"
      ],
      where: {
        is_active: 1
      },
      order: [
        ['created_at', 'DESC']
    ],
      limit: 1,
      raw: true
    }).then((product) => {
      return product
    });
  },
  activateProduct: (id) => {
    console.log(`is_active for product with id ${id} is 0`);
    return Products.update(
      {
        is_active: 1,
      },
      {
        where: { id: id },
      }
    );
  },
};


