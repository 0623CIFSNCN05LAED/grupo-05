const colorServices = require("../services/colors-services");
const sizeServices = require("../services/sizes-services");
const productService = require("../services/product-services");

module.exports = {

  // Vista listado de productos 
  productList: (req, res) => {
    const allProducts = productService.getAllProducts();
    //console.log(allProducts);
    res.render('products', {userData: req.session.userData ? req.session.userData : null, allProducts});
    //{products: mainServicies.getAllProducts()}
  },
  // Vista detalle de un producto particular
  productDetail: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render('product-detail', {
      product: product,
      userData: req.session.userData ? req.session.userData : null} );
  },
  // Vista formulario de edición de productos
  productEdit: (req, res) => {
    const id = req.params.id;
    const product = productService.getProduct(id);
    res.render('product-edit', {
      colorList: colorServices.listColors(),
      sizeList: sizeServices.listsizes(), 
      product,
      userData: req.session.userData ? req.session.userData : null
    });
  },
  // Vista formulario de borrado de producto
  productDelete: (req, res) => {
    res.render('product-delete', {userData: req.session.userData ? req.session.userData : null});
  },

  // Vista formulario de creación de producto
  create: (req, res) => {
    res.render('product-new', {
      colorList: colorServices.listColors(),
      sizeList: sizeServices.listsizes(),
      userData: req.session.userData ? req.session.userData : null
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
    const productId = req.params.id;
    console.log("Update:" + req.body.name);
   // const data = req.body.namedata;
   //productService.updateProduct(id,data)
   
    res.redirect(`/products/detail/${productId}`)
  },
  // Acción de borrado de un producto en la BD
  delete: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.redirect("/");
  },
}