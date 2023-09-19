// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");
const colorsServices = require("../services/colors-services");
const sizesServices = require("../services/sizes-services");

/* Funcion mixeo de atributos
function createVariation (product) {
  let newproduct = []
  product.size.forEach(sizesVariation =>{
      product.color.forEach(colorVariation => {
           let newVariation ={
              ...product,
              size: sizesVariation,
              color: colorVariation,
              hex: colors.findByName(colorVariation).codeHex
          }
          newproduct.push(newVariation)
      })    
  })
      return newproduct

};
*/

module.exports = {
// Get the complete list of product that exist in the database  
  getAllProducts: () => {
      return db.products.getProducts();
      },  
  // Get the complete list of product that exist in the database  
  getProduct: (id) => {
    const product =  db.products.findById(id); 
    for (i=0; i< product.color.length; i++)
    {
      const color = colorsServices.findById(product.color[i]);
      product.color[i] = color.codeHex;
    }; 
    for (i=0; i< product.size.length; i++)
    {
      const size = sizesServices.findById(product.size[i]);
      product.size[i] = size.shortName;
    };
    return product;
    },  
// Create a new product
  createProduct: (product) => {
        /*let newProducts = createVariation(product);
        newProducts.map((newProduct) => db.products.create(newProduct))
        */
        db.products.create(product)
      },

  // Delete a new product
  deleteProduct: (id) => {
    db.products.delete(id);
  },
}