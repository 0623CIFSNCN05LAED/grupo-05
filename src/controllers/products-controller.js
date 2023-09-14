const colorServices = require("../services/colors-services");
const sizeServices = require("../services/sizes-services");
const productService = require("../services/product-service");

module.exports = {

  // Vista listado de productos 
  productList: (req, res) => {
    const allProducts = productService.getAllProducts();
    console.log(allProducts);
    /*        res.render('product-list', {products: mainServicies.getAllProducts()});*/
  },
  // Vista detalle de un producto particular
  productDetail: (req, res) => {
    res.render('product-detail');
  },
  // Vista formulario de edición de productos
  productEdit: (req, res) => {
    res.render('product-edit', {
      colorList: colorServices.listColors(),
      sizeList: sizeServices.listsizes(),
    }
    );
  },
  // Vista formulario de borrado de producto
  productDelete: (req, res) => {
    res.render('product-delete');
  },

  // Vista formulario de creación de producto
  create: (req, res) => {
    res.render('product-new', {
      colorList: colorServices.listColors(),
      sizeList: sizeServices.listsizes(),
    }
    );
  },

  // Acción de creación (a donde se envía el formulario)    
  createNew: (req, res) => {
    const product = {
      art: req.body.art,
      name: req.body.name,
      brand: req.body.brand,
      collection: req.body.collection,
      model: req.body.model,
      gender: req.body.gender,
      size: req.body.size,
      color: req.body.color,
      date: req.body.date,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
    };
    productService.createProduct(product);
    res.redirect("/products/create"); // se usa redirect 
  },

  // Acción de edición (a donde se envía el formulario):   
  update: (req, res) => {

  },
  // Acción de borrado de un producto en la BD
  delete: (req, res) => {

  },
}