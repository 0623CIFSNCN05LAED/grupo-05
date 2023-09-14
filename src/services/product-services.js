// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");

function createVariation (product) {
  let newproduct = []
  product.size.forEach(sizesVariation =>{
      product.color.forEach(colorVariation => {
           let newVariation ={
              ...product,
              size: sizesVariation,
              color: colorVariation 
          }
          newproduct.push(newVariation)
      })    
  })
      return newproduct

};

module.exports = {
// Get the complete list of product that exist in the database  
  getAllProducts: () => {
      return db.products.getProducts();
      },  
  // Get the complete list of product that exist in the database  
  getProduct: (id) => {
    const product =  db.products.findById(id);
    console.log('Product: ', product);
    return product;
    },  
// Create a new product
  createProduct: (product) => {
        let newProducts = createVariation(product);
        newProducts.map((newProduct) => db.products.create(newProduct))
      },
}