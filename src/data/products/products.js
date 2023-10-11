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
  findById: function (id) {
    const products = this.getProducts();
    const product = products.find((product) => product.id == id);
    return product;
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
  update: function (product) {
    const products = this.getProducts();

    const updatedProducts = product.map(p => {
      if (p.id === product.id) {
        return { ...p, ...product };
      }
      return p;
    });

    this.saveProducts(updatedProducts);
  },
  delete: function (id) {
    console.log(`Deleting product with id ${id}`);
    const products = this.getProducts();
    const nonDeletedProducts = products.filter((product) => product.id != id);
    this.saveProducts(nonDeletedProducts);
  },
};
