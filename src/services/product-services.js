// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");

const colorsServicesDB = require("./colors-services");
const sizesServicesDB = require("./sizes-services");

module.exports = {
// Get the complete list of product that exist in the database  
  getAllProducts: () => {
    return products = db.products.getProducts();
    },  
  getDiscountedProducts: () => 
  {
    return products = db.products.getDiscountedProducts();
  },
  getNewsProducts: () => 
  {
    return products = db.products.getNewsProducts();
  },  
  // Get the complete list of product that exist in the database  
  getProduct: async (id) => {
    const product =  await db.products.findById(id); 
    
//    const color = await colorsServicesDB.findById(product.id_color);
//    product.color = ""; 
//    const size = await sizesServicesDB.findById(product.id_size);
//    product.size[i] = size.shortName;

 /*   for (i=0; i< product.color.length; i++)
    {
      const color = await colorsServicesDB.findById(product.color[i]);
      product.color[i] = color.codeHex;
    }; 
    for (i=0; i< product.size.length; i++)
    {
      const size = await sizesServicesDB.findById(product.size[i]);
      product.size[i] = size.shortName;
    };
  */
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
  updateProduct: (id, product) => {
       const productData = {
      id: id,
      ...product
    }
    db.products.update(productData);
  },
  // Delete a new product
  deleteProduct: (id) => {
    db.products.delete(id);
  },
}