// ** Requires's ----------------------------------------------------------------------------------------------
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getProducts: function () {
      const productsFilePath = path.join(__dirname, "./productsDB.json");
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      return products;
    },
    saveProducts: function (products) {
      const productsFilePath = path.join(__dirname, "./productsDB.json");
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    },
    create: function (product) {
        console.log(`Creating product ${product.name}`);
        const products = this.getProducts();
        const newProduct = {
          id: uuidv4(),
          ...product,
        };
        products.push(newProduct);
        this.saveProducts(products);
      },
    };
