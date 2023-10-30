//const colorServices = require("../services/colors-services");
//const sizeServices = require("../services/sizes-services");

const productServiceDB = require("../services/product-services");
const colorServicesDB = require("../services/colors-services");
const sizeServicesDB = require("../services/sizes-services");
const brandServicesDB = require("../services/brands-services");
const genderServicesDB = require("../services/genders-services");

module.exports = {

  // Vista listado de productos 
  productList: async (req, res) => {
    const title = 'Todos los productos';
    const allProducts = await productServiceDB.getAllProducts();    
    res.render('products', {userData: req.session.userData ? req.session.userData : null, allProducts, title });
  },
  // Vista listado de productos - Descuentos
  productDiscountList: async (req, res) => {
    const title = 'Descuentos';
    const allProducts = await productServiceDB.getDiscountedProducts();
    console.log('Vista listado de descuentos: ' + allProducts);
    res.render('products', {userData: req.session.userData ? req.session.userData : null, allProducts, title});
  },
  // Vista listado de productos - Novedades
  productNewsList: async (req, res) => {
    const title = 'Novedades';
    const allProducts = await productServiceDB.getNewsProducts();
    res.render('products', {userData: req.session.userData ? req.session.userData : null, allProducts, title});
  },  
  // Vista detalle de un producto particular
  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productServiceDB.getProduct(id);
    res.render('product-detail', {
      product: product,
      userData: req.session.userData ? req.session.userData : null} );
  },
  // Vista formulario de edición de productos
  productEdit: async (req, res) => {
    const id = req.params.id;
    const product =  await productServiceDB.getProduct(id);
    const allSizes = await sizeServicesDB.listSizes().then();
    const allColors = await colorServicesDB.listColors().then();
    const allBrands = await brandServicesDB.listBrands().then();
    const allGenders = await genderServicesDB.listGenders().then();

    res.render('product-edit', {
      colorList: allColors, //colorServices.listColors(),
      sizeList: allSizes, //sizeServices.listsizes(), 
      brandList: allBrands,   
      genderList: allGenders, 
      product,
      userData: req.session.userData ? req.session.userData : null
    });
  },
  // Vista formulario de borrado de producto
  productDelete: (req, res) => {
    res.render('product-delete', {userData: req.session.userData ? req.session.userData : null});
  },

  // Vista formulario de creación de producto
  productCreate: async (req, res) => {
    const allColors = await colorServicesDB.listColors().then();
    const allSizes = await sizeServicesDB.listSizes().then();
    const allBrands = await brandServicesDB.listBrands().then();
    const allGenders = await genderServicesDB.listGenders().then();

    res.render('product-new', {
      colorList: allColors, //colorServices.listColors(),
      sizeList: allSizes, //sizeServices.listsizes(),
      brandList: allBrands,
      genderList: allGenders, 
      userData: req.session.userData ? req.session.userData : null
      });
},

  // Acción de creación (a donde se envía el formulario)    
  create: (req, res) => {
    const product = {
      art: req.body.art,
      name: req.body.name,
      id_brand: req.body.brand,
      collection: req.body.collection,
      model: req.body.model,
      id_gender: req.body.gender,
      id_size: req.body.size,
      id_color: req.body.color,
      year: req.body.year,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
      is_news: req.body.is_news == 'on' ? '1' : "0"
    };
    productServiceDB.createProduct(product);
    res.redirect("/products"); 
  },

  // Acción de edición (a donde se envía el formulario):   
  update: async (req, res) => {
    const productId = req.params.id;
    const originalProduct = await productServiceDB.getProduct(productId);
    let updatedImage;

    if ( req.file == undefined){
      updatedImage = originalProduct.image;
    }else{
      updatedImage = req.file ? req.file.filename : "default-image.png";
    }
    const updatedProduct = {
      art: req.body.art,
      name: req.body.name,
      id_brand: req.body.brand,
      collection: req.body.collection,
      model: req.body.model,
      id_gender: req.body.gender,
//      size: req.body.size,
//      color: req.body.color,
      year: req.body.year,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: updatedImage,
      is_news: req.body.is_news == 'on' ? '1' : "0"
    };
    
    productServiceDB.updateProduct(productId,updatedProduct)  
    res.redirect(`/products/detail/${productId}`);
  },
  // Acción de borrado de un producto en la BD
  delete: (req, res) => {
    const id = req.params.id;
    productServiceDB.deleteProduct(id);
    res.redirect("/products");
  },
}