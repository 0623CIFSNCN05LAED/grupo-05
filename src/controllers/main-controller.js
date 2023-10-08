const path = require('path');

const mainController = {
    home: (req,res) => {
        res.render("index",{userData: !req.session.userData ? req.session.userData : null});
    },

    productCart: (req,res) => {
        res.render('product-cart');
    },

}

module.exports = mainController;