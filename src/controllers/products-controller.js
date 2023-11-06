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
    res.render('products', { userData: req.session.userData ? req.session.userData : null, allProducts, title });
  },
  // Vista listado de productos - Descuentos
  productDiscountList: async (req, res) => {
    const title = 'Descuentos';
    const allProducts = await productServiceDB.getDiscountedProducts();
    res.render('products', { userData: req.session.userData ? req.session.userData : null, allProducts, title });
  },
  // Vista listado de productos - Novedades
  productNewsList: async (req, res) => {
    const title = 'Novedades';
    const allProducts = await productServiceDB.getNewsProducts();
    res.render('products', { userData: req.session.userData ? req.session.userData : null, allProducts, title });
  },
  // Vista detalle de un producto particular
  productDetail: async (req, res) => {
    const id = req.params.id;
    const product = await productServiceDB.getProduct(id);   

    res.render('product-detail', {
      product: product,
    
      userData: req.session.userData ? req.session.userData : null
    });
  },
  // Vista formulario de edición de productos
  productEdit: async (req, res) => {
    const id = req.params.id;
    const productPromise = productServiceDB.getProduct(id);
    const allSizesPromise = sizeServicesDB.listSizes();
    const allColorsPromise = colorServicesDB.listColors();
    const allBrandsPromise = brandServicesDB.listBrands();
    const allGendersPromise = genderServicesDB.listGenders();

    const [product, allSizes, allColors, allBrands, allGenders] = 
      await Promise.all([productPromise, allSizesPromise, allColorsPromise, allBrandsPromise, allGendersPromise]);

    res.render('product-edit', {
      colorList: allColors,
      sizeList: allSizes,
      brandList: allBrands,
      genderList: allGenders,
      product,
      userData: req.session.userData ? req.session.userData : null
    });
  },
  // Vista formulario de borrado de producto
  productDelete: (req, res) => {
    res.render('product-delete', { userData: req.session.userData ? req.session.userData : null });
  },
  // Vista formulario de creación de producto
  productCreate: async (req, res) => {
    const allSizesPromise = sizeServicesDB.listSizes();
    const allColorsPromise = colorServicesDB.listColors();
    const allBrandsPromise = brandServicesDB.listBrands();
    const allGendersPromise = genderServicesDB.listGenders();
    
    const [allSizes, allColors, allBrands, allGenders] = await Promise.all([allSizesPromise, allColorsPromise, allBrandsPromise, allGendersPromise]);

    res.render('product-new', {
      colorList: allColors,
      sizeList: allSizes,
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
      year: req.body.year,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
      is_news: req.body.is_news == 'on' ? '1' : "0",
      is_active: 1,
      created_by: req.session.userData.id


    };
    productServiceDB.createProduct(product);
    res.redirect("/products");
  },
  // Acción de edición (a donde se envía el formulario):   
  update: async (req, res) => {
    const productId = req.params.id;
    const originalProduct = await productServiceDB.getProduct(productId);
    let updatedImage;

    if (req.file == undefined) {
      updatedImage = originalProduct.image;
    } else {
      updatedImage = req.file ? req.file.filename : "default-image.png";
    }
    const updatedProduct = {
      art: req.body.art,
      name: req.body.name,
      id_brand: req.body.brand,
      collection: req.body.collection,
      model: req.body.model,
      id_gender: req.body.gender,
      year: req.body.year,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: updatedImage,
      is_news: req.body.is_news == 'on' ? '1' : "0",
      updated_by: req.session.userData.id
    };
    console.log(updatedProduct)
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