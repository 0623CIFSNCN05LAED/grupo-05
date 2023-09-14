const colorServices = require("../services/colors-services");
const sizeServices = require("../services/sizes-services");
const productService = require("../services/product-service");


module.exports= {
    // Create - Form to create
  create: (req, res) => {
    res.render('product-new',{
      colorList: colorServices.listColors(),
      sizeList : sizeServices.listsizes(),
  }
  );
  },
  createNew:(req, res) => {
    console.log(req.body)
    const product = {
      art: req.body.art,
      name: req.body.name,
      brand: req.body.brand,
      collection: req.body.collection,
      model: req.body.model,
      gender: req.body.gender,
      date: req.body.date,
      description: req.body.description,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
    };
    productService.createProduct(product);
    res.redirect("/products/create"); // se usa redirect 
  },
  productDetail: (req,res) => {
    res.render('product-detail');
  },

  productList: (req,res) => {
    res.render('product-list');
  },
  productEdit: (req,res) => {
    res.render('product-edit',{
        colorList: colorServices.listColors(),
        sizeList : sizeServices.listsizes(),
    }
    );
},
}