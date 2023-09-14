const db = require("../data/db");

module.exports = {
    createProduct: (product) => {
        db.products.create(product);
      },
}