const path = require('path');

const mainController = {
    home: (req,res) => {
        res.render("index");
    },

    productCart: (req,res) => {
        res.render('product-cart');
    },

}

module.exports = mainController;