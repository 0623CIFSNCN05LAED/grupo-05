// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");

module.exports = {
// Get the complete list of product that exist in the database  
  getAllProducts: () => {
      return db.products.getProducts();
      },  
// Create a new product
  createProduct: (product) => {
        db.products.create(product);
      },
}