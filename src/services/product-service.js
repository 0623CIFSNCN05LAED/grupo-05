// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");

function createColorSide (colors,sizes) { 
  const colorSide = [] 
  sizes.map((size) => {
       colors.forEach(color => {
           let atribute = {
               size, 
               color 
              }
          colorSide.push(atribute) 
      }); 
  } ) 
  return colorSide 
};

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
// Create a new product
  createProduct: (product) => {
        let newProducts = createVariation(product);
        newProducts.map((newProduct) => db.products.create(newProduct))
      },
}